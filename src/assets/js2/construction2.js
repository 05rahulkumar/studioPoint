$(document).ready(function my(){
  $(".backgroundfor").addClass("sandpit");
      for(var i=9;i>0;i-=2){
              var timeout=10 - i;
              var temp1 = '<div' + ' id="0' + i +'brick" ' + 'class="oddbrick1 brick" />';
              var temp2 = '<div' + ' id="1' + i +'brick" ' + 'class="oddbrick2 brick" />';
              var temp3 = '<div' + ' id="2' + i +'brick" ' + 'class="oddbrick3 brick" />';
              var temp4 = '<div' + ' id="3' + i +'brick" ' + 'class="oddbrick4 brick" />';
              var temp5 = '<div' + ' id="4' + i +'brick" ' + 'class="oddbrick5 brick" />';
              var temp6 = '<div' + ' id="5' + i +'brick" ' + 'class="oddbrick6 brick" />';
              var temp7 = '<div' + ' id="6' + i +'brick" ' + 'class="oddbrick7 brick" />';
              var temp8 = '<div' + ' id="7' + i +'brick" ' + 'class="oddbrick8 brick" />';
              var pos = (i*10) + 'vh';
              $(".sandpit").append(temp1);
              $(".sandpit").append(temp2);
              $(".sandpit").append(temp3);
              $(".sandpit").append(temp4);
              $(".sandpit").append(temp5);
              $(".sandpit").append(temp6);
              $(".sandpit").append(temp7);
              $(".sandpit").append(temp8);
              var selectbrick1 = '#0' + i + 'brick';
              var selectbrick2 = '#1' + i + 'brick';
              var selectbrick3 = '#2' + i + 'brick';
              var selectbrick4 = '#3' + i + 'brick';
              var selectbrick5 = '#4' + i + 'brick';
              var selectbrick6 = '#5' + i + 'brick';
              var selectbrick7 = '#6' + i + 'brick';
              var selectbrick8 = '#7' + i + 'brick';
              var selection = selectbrick1 + ',' + selectbrick2 + ',' + selectbrick3 + ',' + selectbrick4 + ',' + selectbrick5 + ',' + selectbrick6 + ',' + selectbrick7
               + ',' + selectbrick8;
              $(selection).animate({
                  'marginTop' : pos
              },timeout*1000);
      }
      for(var i=8;i>=0;i-=2){
              var timeout=10 - i;
              var temp1 = '<div' + ' id="0' + i +'brick" ' + 'class="evenbrick1 brick" />';
              var temp2 = '<div' + ' id="1' + i +'brick" ' + 'class="evenbrick2 brick" />';
              var temp3 = '<div' + ' id="2' + i +'brick" ' + 'class="evenbrick3 brick" />';
              var temp4 = '<div' + ' id="3' + i +'brick" ' + 'class="evenbrick4 brick" />';
              var temp5 = '<div' + ' id="4' + i +'brick" ' + 'class="evenbrick5 brick" />';
              var temp6 = '<div' + ' id="5' + i +'brick" ' + 'class="evenbrick6 brick" />';
              var temp7 = '<div' + ' id="6' + i +'brick" ' + 'class="evenbrick7 brick" />';
              var temp8 = '<div' + ' id="7' + i +'brick" ' + 'class="evenbrick8 brick" />';
              var temp9 = '<div' + ' id="8' + i +'brick" ' + 'class="evenbrick9 brick" />';
              var pos = (i*10) + 'vh';
              $(".sandpit").append(temp1);
              $(".sandpit").append(temp2);
              $(".sandpit").append(temp3);
              $(".sandpit").append(temp4);
              $(".sandpit").append(temp5);
              $(".sandpit").append(temp6);
              $(".sandpit").append(temp7);
              $(".sandpit").append(temp8);
              $(".sandpit").append(temp9);
              var selectbrick1 = '#0' + i + 'brick';
              var selectbrick2 = '#1' + i + 'brick';
              var selectbrick3 = '#2' + i + 'brick';
              var selectbrick4 = '#3' + i + 'brick';
              var selectbrick5 = '#4' + i + 'brick';
              var selectbrick6 = '#5' + i + 'brick';
              var selectbrick7 = '#6' + i + 'brick';
              var selectbrick8 = '#7' + i + 'brick';
              var selectbrick9 = '#8' + i + 'brick';
              var selection = selectbrick1 + ',' + selectbrick2 + ',' + selectbrick3 + ',' + selectbrick4 + ',' + selectbrick5 + ',' + selectbrick6 + ',' + selectbrick7
               + ',' + selectbrick8 + ',' + selectbrick9;
              $(selection).animate({
                  'marginTop' : pos
              },timeout*1100);
      }
      /*
      
      IDs on the left side
      00	10	20	30
      01	11	21	31
      02	12	22	32
      03	13	23	33
      04	14	24	34
      05	15	25	35
      06	16	26	36
      07	17	27	37
      08	18	28	38
      09	19	29	39
      
      IDs on the right side
      40	50	60	70	80
      41	51	61	71
      42	52	62	72	82
      43	53	63	73
      44	54	64	74	84
      45	55	65	75
      46	56	66	76	86
      47	57	67	87
      48	58	68	78	88
      49	59	69	89
      
      */
      setTimeout(function(){
          //Should go left.
          for(var i=0;i<10;i++){
              var selectbrick1 = '#0' + i + 'brick';
              var selectbrick2 = '#1' + i + 'brick';
              var selectbrick3 = '#2' + i + 'brick';
              var selectbrick4 = '#3' + i + 'brick';
              var selection = selectbrick1 + ',' + selectbrick2 + ',' + selectbrick3 + ',' + selectbrick4;					
              $(selection).animate({
                  'left':'-100vw'
              },5000);
          }
          //Should go right.
          for(var i=0;i<10;i++){
              var selectbrick1 = '#4' + i + 'brick';
              var selectbrick2 = '#5' + i + 'brick';
              var selectbrick3 = '#6' + i + 'brick';
              var selectbrick4 = '#7' + i + 'brick';
              if(i%2==0){	
                  selectbrick4 += ',#8' + i + 'brick';
              }
              selection = selectbrick1 + ',' + selectbrick2 + ',' + selectbrick3 + ',' + selectbrick4;
              $(selection).animate({
                  'left':'100vw'
              },5000);
          }
          $('.sandpit').fadeOut(4000,function(){
              $('backgroundfor').removeClass('.sandpit');
          });
      },11000);
});