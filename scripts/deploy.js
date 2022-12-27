const ethers = require("ethers");

newWallet = async () => {
  let password = prompt("Password");

  if (password) {
    var randomSeed = ethers.Wallet.createRandom();

    console.log(randomSeed.mnemonic);
    console.log(randomSeed.address);

    function callback(progress) {
      console.log("Encrypting: " + parseInt(progress * 100) + "% complete");
    }

    let encryptPromise = randomSeed.encrypt(password, callback);

    encryptPromise.then(function (json) {
      console.log(json);
    });
  }
};

newWallet();
