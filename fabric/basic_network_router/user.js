# user


const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const FabricCAServices = require('fabric-ca-client');
const { FileSystemWallet, X509WalletMixin, Gateway } = require('fabric-network');

/* GET */
router.get('/', async(req, res, next) => {
    const ccpPath = path.resolve(__dirname, '..' , 'basic_articles', 'connection.json');
    const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
    const ccp = JSON.parse(ccpJSON);

    const caURL = ccp.certificateAuthorities['ca.example.com'].url;
    const ca = new FabricCAServices(caURL);
    
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);
    
    const adminExists = await wallet.exists('admin');
    if (!adminExists) {
       // Enroll the admin user, and import the new identity into the wallet.
       const enrollment = await ca.enroll({ enrollmentID: 'admin', enrollmentSecret: 'adminpw' });
       const identity = X509WalletMixin.createIdentity('Org1MSP', enrollment.certificate, enrollment.key.toBytes());
       wallet.import('admin', identity);
       console.log('Successfully enrolled admin user "admin" and imported it into the wallet');

    }   

    // 지갑에 user1에 대한 신원 증명서가 있는지 확인
    const userExists = await wallet.exists('user1');
    if (!userExists) {
        // 피어 노드로 연결하기 위한 Gateway 객체 생성.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'admin', discovery: { enabled: false } });

        // Gateway를 통해 인증기관 객체를 생성
        const ca = gateway.getClient().getCertificateAuthority();
        const adminIdentity = gateway.getCurrentIdentity();

        // user1의 신원 증명
        const secret = await ca.register({ affiliation: 'org1.department1', enrollmentID: 'user1', role: 'client' }, adminIdentity);
        const enrollment = await ca.enroll({ enrollmentID: 'user1', enrollmentSecret: secret });
        const userIdentity = X509WalletMixin.createIdentity('Org1MSP', enrollment.certificate, enrollment.key.toBytes());
        wallet.import('user1', userIdentity);
        console.log('Successfully registered and enrolled admin user "user1" and imported it into the wallet');

    }

    res.json({"msg":"ok"});
  });
  

module.exports = router;
