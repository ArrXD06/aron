//opptaterer reustlate tar stemmetller fra local storage og da tar fra html og gjør den til variabel 
let resultsAp = Number(localStorage.getItem('apResultater')) || 0;
let resultsH = Number(localStorage.getItem('hResultater')) || 0;
let resultsSP = Number(localStorage.getItem('spResultater')) || 0;
let resultsFRP = Number(localStorage.getItem('frpResultater')) || 0;

//tar elemente fra html å gjør det til en variabel
document.getElementById('resultaterAp').innerHTML = resultsAp;
document.getElementById('resultaterH').innerHTML = resultsH;
document.getElementById('resultaterSP').innerHTML = resultsSP;
document.getElementById('resultaterFRP').innerHTML = resultsFRP;

// stemme funksjon  
function valgStemme(stemme) {
    if (stemme === 'AR') {
        resultsAp++;
        document.getElementById('resultaterAp').innerHTML = resultsAp;
        localStorage.setItem('apResultater', resultsAp.toString());
        console.log(localStorage.getItem('apResultater'));
    }
    if (stemme === 'HR') {
        resultsH++;
        document.getElementById('resultaterH').innerHTML = resultsH;
        localStorage.setItem('hResultater', resultsH.toString());
        console.log(localStorage.getItem('hResultater'));
    }
    if (stemme === 'SR') {
        resultsSP++;
        document.getElementById('resultaterSP').innerHTML = resultsSP;
        localStorage.setItem('spResultater', resultsSP.toString());
        console.log(localStorage.getItem('spResultater'));
    }
    if (stemme === 'FRPR') {
        resultsFRP++;
        document.getElementById('resultaterFRP').innerHTML = resultsFRP;
        localStorage.setItem('frpResultater', resultsFRP.toString());
        console.log(localStorage.getItem('frpResultater'));

        
    }
    
    updatechart()
}

// resette funksjon 
var resetButton = document.getElementById("reset-button");

if (resetButton) {
    resetButton.addEventListener("click", function() {
       
        localStorage.setItem('apResultater', '0');
        localStorage.setItem('hResultater', '0');
        localStorage.setItem('spResultater', '0');
        localStorage.setItem('frpResultater', '0');

       
        resultsAp = resultsH = resultsSP = resultsFRP = 0;
        document.getElementById('resultaterAp').innerHTML = resultsAp;
        document.getElementById('resultaterH').innerHTML = resultsH;
        document.getElementById('resultaterSP').innerHTML = resultsSP;
        document.getElementById('resultaterFRP').innerHTML = resultsFRP;

        updatechart()
    });
   
    
}

// chart visualisering 
  const ctx = document.getElementById('myChart');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['AP', 'H', 'SP', 'FRP',],
      datasets: [{
        label: '# of Votes',
        data: [resultsAp, resultsH, resultsSP, resultsFRP,],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
        
      }
    }
  });

  //opptaterer charten
  function updatechart(){
    myChart.data.datasets[0].data=[resultsAp, resultsH, resultsSP, resultsFRP];
    myChart.update()
  }




  


