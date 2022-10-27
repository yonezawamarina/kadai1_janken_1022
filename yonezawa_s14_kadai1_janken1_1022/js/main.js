

// スタートボタン
function OnButtonClick() {
    target = document.getElementById("button1");
    target.innerHTML = "最初はグー、じゃんけん";
}


function R_Click(p_janken_r) {
  let janken = ['グー','チョキ','パー',];//"janken"のリストを作成
  let janken_r = Math.floor( Math.random() * 3);//Math.random() で乱数作成

  let p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"のリストを作成

      //勝ち負けの判定機プログラム
      if (janken_r === p_janken_r) {
          Result_end = "あいこ！";
      } else if(p_janken_r === 0 && janken_r === 1) {
          Result_end = "あなたの勝ち！";
      }else if(p_janken_r === 1 && janken_r === 2) {
          Result_end = "あなたの勝ち！";
      }else if(p_janken_r === 2 && janken_r === 0) {
          Result_end = "あなたの勝ち";
      }else {
          Result_end = "残念！あたなたの負けです";
      }

      //結果を表示するためのプログラム
      document.getElementById("jankenpon").src="jan" + janken_r + ".png";
      document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] +"を選択しました。ジャンケンの結果は・・・？";
      document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] + Result_end;
      document.getElementById("jankenpon2").src="jan" + p_janken_r + ".png";
  }
  




