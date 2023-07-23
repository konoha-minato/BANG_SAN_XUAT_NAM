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
        // console.log(ar)
        thang= Number(ar[0][6].replace('KẾT QUẢ THỰC HIỆN THÁNG ','').replace(' S.LƯỢNG','').trim())
        if (thang ==1){thang=1}
        if (thang ==4){thang=4}
        if (thang ==7){thang=7}
        if (thang ==10){thang=10}
        // console.log(thang)
        
        for (i=1; i<4 ;i++){
          document.getElementById("T"+i).innerHTML='THÁNG '+ (thang+i-1);
        }
        var cell='<td style="text-align: center;">value</td>'
        var line='<tr style="text-align: center;font-size: 1em;">cell</tr>'
        var row_data=''
        for (i=1;i<ar.length;i++){
          // console.log(ar[i])
          row = table.insertRow(-1);
          for(j=1;j<22;j++){
            if (j!=2){row_data+=cell.replace('value',ar[i][j])}
            else{row_data+=cell.replace('value',ar[i][j]).replace('center','left')}
          }
          row.innerHTML=line.replace('cell',row_data)
          row_data=''      
        }
      })
  }
