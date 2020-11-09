class GetCoronaInfo{
  constructor(GetFormattedDate,ApiAdapter){
    this.getFormattedDate = GetFormattedDate
    this.apiAdapter = ApiAdapter
  }
  
  async getInfo (){
    const date = this.getFormattedDate.getDateWithoutQuotes() 
    return this.apiAdapter.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/${date}`,null)
  }
}
module.exports = { GetCoronaInfo };
