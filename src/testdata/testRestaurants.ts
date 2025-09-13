import Restaurant from "@/interface/Restaurant";

const testRestaurantData:Restaurant[] = [
  {
    id:'aaaaa',
    name:'レストラン１',
    closeDays:[0,1],
    rate:5,
    showFlg:true
  },
  {
    id:'bnbbbb',
    name:'レストラン２',
    closeDays:[2,3],
    rate:1,
    showFlg:true
  },
  {
    id:'ccccc',
    name:'レストラン３',
    closeDays:[4],
    rate:8,
    showFlg:true
  },
  {
    id:'ddddd',
    name:'レストラン４',
    closeDays:[5,6],
    rate:5,
    showFlg:true
  },
  {
    id:'eeeee',
    name:'レストラン５',
    closeDays:[],
    rate:10,
    showFlg:true
  },
  {
    id:'fffff',
    name:'レストラン6',
    closeDays:[1,3,6],
    rate:1,
    showFlg:false
  },
]

export default testRestaurantData;