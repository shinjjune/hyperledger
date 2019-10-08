peer chaincode install -n mission_cc -v 1.0 -l node -p /opt/gopath/src/github.com/mission

peer chaincode instantiate -n mission_cc -v 1.0 -l node -C mychannel -c '{"Args":[]}'

peer chaincode invoke -C mychannel -n mission_cc -c '{"Args":["initLedger"]}'

peer chaincode query -C mychannel -n mission_cc -c '{"Args":["queryMission","Auba"]}'
