const sheetId = '1GOSlI2StWgksh4xyB3_ppPtFtepYJZeCZkA9asNjOx8';
// const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'Trang tính1';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

  // const query = encodeURIComponent('Select *')
  // const url = `${base}&sheet=${sheetName}&tq=${query}`
  const data = []
  document.addEventListener('DOMContentLoaded', init)
  // const output = document.querySelector('.output')
  
  function init() {
    var ar,i,j,row,thang;
    var table = document.getElementById("bang_chinh");
    fetch(base)
      .then(res => res.text())
      .then(rep => {
        //Remove additional text and extract only JSON:
        // const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        rep=rep.replace(/","/g,'|').replace(/"/g,'|')
        ar=rep.split("\n").map((n)=>{return n.split("|")})
        ar[6][5]= '13,26±0,5'
        ar[8][5]='≤ 7,0'
        ar[9][5]='≥ 25,64'
        ar[10][5]='≥ 58,98'

        // console.log(ar)
        // thang= Number(ar[0][6].replace('KẾT QUẢ THỰC HIỆN THÁNG ','').replace(' S.LƯỢNG','').trim())
        // console.log(thang)
        // for (i=1; i<4 ;i++){
        //   document.getElementById("T"+i).innerHTML='THÁNG '+ (thang+i-1);
        // }
        var cell='<td style="text-align: center;padding-top: 6px;padding-bottom: 6px;">value</td>'
        var line='<tr class=".font_row" style="text-align:center;font-weight: bolder;">cell</tr>'
        var row_data=''
        for (i=1;i<ar.length;i++){
          // console.log(ar[i])
          row = table.insertRow(-1);
          for(j=1;j<22;j++){
            if(j>=6 && j<=11){continue;}
            if (j!=2){row_data+=cell.replace('value',ar[i][j])}
            else{row_data+=cell.replace('value',ar[i][j]).replace('center','left')}
          }
          row.innerHTML=line.replace('cell',row_data)
          row_data=''      
        }
      })
  }
// function tang(){
//   const item = document.querySelectorAll('.font_row');
//   var size=item.style.font-size;
  
//   item.forEach(vl => {
//     vl.style.font-size ='0.5em';
//   });}
