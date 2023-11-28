"use strict";

const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const KeyTokenService = require("./keyToken.service");
const RoleShop = require("../auth/constant");
const { createTokenPair } = require("../auth/authUtils");
const { getInfoData } = require("../utils");




class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // step1: check email exist
      const hodelShop = await shopModel.findOne({ email }).lean(); //lean make query faster, less size , return object javascript 
      if (hodelShop) {
        return {
          code: "xxxx",
          message: "Shop already registered",
        };
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP],
      });
      // step2: if newShop created successful refresh token
      if (newShop) {
        // created privateKey, publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: 'pkcs1',  //public key CryptoGraphy Standards 1
            format: 'pem',
          },
          privateKeyEncoding: {
            type: 'pkcs1',  //public key CryptoGraphy Standards 1
            format: 'pem',
          },
        });

        console.log({ privateKey, publicKey }); // save collection KeyStore

        const publicKeyString = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
        });

        if (!publicKeyString) {
          return {
            code: "xxxx",
            message: "publicKeyString error",
          };
        }

        const publicKeyObject = crypto.createPublicKey(publicKeyString);
        console.log(`publicKeyObject::`, publicKeyObject);

        // created token pair
        const tokens = await createTokenPair({userId: newShop._id, email }, publicKeyString, privateKey);
        console.log(`Created Token Success::`, tokens);

        return {
          code: 201,
          metadata: {
            shop: getInfoData({ fileds: ['_id', 'name', 'email'], object: newShop}),
            tokens,
          },
        };
      }

      return {
        code: 200,
        metadata: null,
      };
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
