## HYPERLEDGER FABRIC


#### hyperledger 란??

참조: https://developer.ibm.com/kr/cloud/blockchain/blockchain-special-series/2018/11/12/hyperledger-fabric-%ED%95%98%EC%9D%B4%ED%8D%BC%EB%A0%88%EC%A0%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EC%9A%94/

리눅스 재단에서 주관하는 블록체인 오픈소스 프로젝트입니다.
금융, IoT, 물류, 제조, 기술 산업 등 여러 산업에 걸쳐 응용 가능한 블록체인 기술을 만드는 것이 목표로 하고 있죠.

하이퍼레저 이외에도 R3, Ripple, Ethereum 등 다른 블록체인 플랫폼도 있습니다. 
이 중 하이퍼레저가 특별한 이유는, 
  1) 프라이빗 블록체인 플랫폼으로서 기업 비즈니스를 구현하기에 적합한 환경이라는 점 
  2) 특정 비즈니스 모델에 특화된 타 플랫폼과 달리 여러 산업에 범용적으로 도입 가능한 기술 표준을 제시한다는 점입니다.
  
  
  
![image](https://user-images.githubusercontent.com/47058441/64676089-b6a2d200-d4af-11e9-800f-079706c06fdb.png)


하이퍼레저 패브릭은 허가형 프라이빗 블록체인(Permissioned Private Blockchain)의 형태를 가진다. 누구나 자유롭게 참여가 가능한 기존의 퍼블릭 블록체인과 달리, 하이퍼레저 패브릭에서는 인증관리 시스템에 의해 허가된 사용자만이 블록체인 네트워크에 참여할 수 있다. 따라서 패브릭 네트워크에 참여한 노드들은  이미 시스템에 의해 허가된, 신뢰를 가진 노드로 볼 수 있고 퍼블릭 블록체인에서 사용하는 악의적인 노드를 검증하기 위한 복잡한 합의 알고리즘 등을 필요로 하지 않는다. 단지 원장에 접근하려는 사용자가 허가된 노드인가, 그러한 권한이 있는가, 트랜잭션이 제대로 구성되어 있는가를 검증하는 정도로 충분하다. 물론 필요에 의해 원하는 합의 알고리즘을 네트워크 내에서 선택적으로 사용할 수도 있다. 

또한 패브릭에서는 모든 노드가 동일한 원자으로 정보를 공유할 수 있고, 비즈니스 목적에 맞게 공유하고자 하는 노드 간에만 별도의 원장을 생성하는 것도 가능하다. 기존의 블록체인 네트워크에서는 참여한 모든 노드에게 원장에 기록되어 있는 정보가 공유되었다. 하지만 기업 입장에서 비즈니스를 하다 보면 모두에게 공유하고 싶지 않은 민감한 정보들이 생기기 마련이다. 하이퍼레져 패브릭은 네트워크 내에서 목적에 맞는 별도의 원장을 생성할 수 있는 채널(Channel)을 제공함으로써 기업이 사용하기 용이하도록 고안되었다.

### 하이퍼레저 패브릭 구성요소(Hyperledger Fabric Component)

구성요소에는 크게 분산원장, 체인코드, peer, orderer가있다.

우선 블록체인 기술의 핵심인 분산원장(Distributed Ledger)이 있다. 대부분이 알고 있듯 공유하고자 하는 데이터의 변화를 모두 기록해둔 것이 원장이다.원장은 현재의 상태를 저장해 놓은 데이터베이스인 월드 스테이트(World State)와 상태변화에 대한 모든 로그 기록이 저장 되어있는 블록체인 부분으로 나뉘어있다. 추가로 원장에 새로운 내용을 업데이트 하거나 기존의 내용을 읽어 오기 위해 필요한 것이 바로 체인코드(Chaincode)이다.

이러한 원장과


  
  
  
