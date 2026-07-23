(()=>{
const QUESTIONS=[
 {id:8,category:'房屋稅',scenario:'民眾說：「我的房屋目前空著，如果改成出租，房屋稅會比較便宜嗎？」',options:['只要出租就一律免徵房屋稅','出租並申報租賃所得，且租金達標準，可適用較優惠稅率','出租後一律按營業用3%課徵'],correct:1,explanation:'出租申報租賃所得且達當地一般租金標準者，可適用1.5%至2.4%的較優惠稅率。'},
 {id:7,category:'房屋稅',scenario:'民眾詢問自住房屋稅率，需要符合哪些基本條件？',options:['只要本人持有房屋即可','無出租營業、本人或親屬實際居住並設籍，且家戶全國3戶內','房屋滿6年且每年提出申請'],correct:1,explanation:'自住房屋須無出租或營業，供本人、配偶或直系親屬實際居住並設籍，家戶全國合計3戶內。'},
 {id:16,category:'房屋稅',scenario:'民眾問：「房屋稅每年什麼時候繳？」',options:['每年4月1日至4月30日','每年5月1日至5月31日','每年11月1日至11月30日'],correct:1,explanation:'房屋稅每年徵收1次，繳納期間為5月1日至5月31日。'},
 {id:24,category:'地價稅',scenario:'民眾新買自住房屋，問地價稅自用住宅用地稅率應在何時以前申請？',options:['每年3月22日前','每年9月22日前','收到稅單後再申請即可'],correct:1,explanation:'應於地價稅開徵40日前，也就是每年9月22日以前提出申請。'},
 {id:27,category:'契稅',scenario:'民眾詢問配偶互贈房屋，是否需要申報契稅？',options:['配偶間贈與完全不需要申報','應於贈與契約成立日起30日內申報契稅','只要辦理贈與稅即可，不涉及契稅'],correct:1,explanation:'配偶互贈房屋仍應於贈與契約成立日起30日內，向房屋所在地稅捐機關申報贈與契稅。'},
 {id:28,category:'契稅',scenario:'民眾買賣房屋逾期申報契稅，詢問是否會受罰。',options:['不會，只要補申報即可','每逾3日加徵應納稅額1%怠報金，並有上限','一律處房屋現值10%的罰鍰'],correct:1,explanation:'逾期申報每逾3日加徵應納稅額1%的怠報金，最高以應納稅額為限，且不得超過15,000元。'},
 {id:33,category:'土地增值稅',scenario:'民眾問「一生一屋」是否可以直接申請，不必先使用「一生一次」？',options:['可以，兩種優惠可自由選擇','不可以，須曾使用過「一生一次」優惠','只要持有房屋滿1年就可以'],correct:1,explanation:'申請「一生一屋」前，必須曾使用過土地增值稅「一生一次」自用住宅用地優惠。'},
 {id:37,category:'土地增值稅',scenario:'重購退稅核准後，民眾想把全家戶籍都遷出新購房屋，會有影響嗎？',options:['沒有影響，退稅核准後就結案','5年內戶籍全部遷出，可能被追繳原退稅款','只要房屋沒有出售就完全不受影響'],correct:1,explanation:'新購房屋5年內須繼續作自用住宅使用，戶籍不得全部遷出，否則可能追繳原退還的土地增值稅。'},
 {id:40,category:'使用牌照稅',scenario:'民眾問150cc的機車是否需要繳使用牌照稅？',options:['150cc以下不必繳納使用牌照稅','所有機車都要繳','只有電動機車需要繳'],correct:0,explanation:'機車汽缸總排氣量150cc（含）以下免徵，151cc（含）以上才課徵使用牌照稅。'},
 {id:41,category:'使用牌照稅',scenario:'車輛欠繳使用牌照稅，滯納期滿後仍行駛公共道路被查獲，如何處理？',options:['只要補繳原稅款即可','除補稅外，並處應納稅額1倍以下罰鍰','直接吊銷駕照，不需補稅'],correct:1,explanation:'除責令補稅外，還會處以應納稅額1倍以下的罰鍰。'},
 {id:47,category:'娛樂稅',scenario:'民眾詢問娛樂稅法修正案自何時生效。',options:['115年5月20日','115年5月21日','115年5月22日'],correct:2,explanation:'修正案於115年5月20日公布，依規定自115年5月22日起發生效力。'},
 {id:49,category:'娛樂稅',scenario:'115年6月1日舉辦的演唱會，還需要代徵娛樂稅嗎？',options:['仍須全額代徵娛樂稅','不需要，因為是在115年5月22日生效後舉辦','只有臺北市需要代徵'],correct:1,explanation:'115年5月22日起舉辦的演唱會已非娛樂稅課徵項目，無須代徵或繳納娛樂稅。'}
];
let round=[],index=0,score=0,lives=3,wrong=[];
// 儲存正式題庫資料
let officialQuestionBank = [];

// 讀取 questionBank.json
async function loadOfficialQuestionBank() {
  try {
    const response = await fetch('questionBank.json', {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('無法讀取 questionBank.json');
    }

    officialQuestionBank = await response.json();

    if (!Array.isArray(officialQuestionBank)) {
      officialQuestionBank = [];
    }
  } catch (error) {
    console.warn('正式題庫讀取失敗，改用測驗題分類。', error);
    officialQuestionBank = [];
  }
}
const $=s=>document.querySelector(s);
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
async function init() {
  const start = $('#startRpgBtn');
  if (!start) return;

  // 先讀取126題正式題庫
  await loadOfficialQuestionBank();

  // 統計正式題庫各分類題數
  const officialCount = {};

  officialQuestionBank.forEach(item => {
    const category = item.category || '其他';
    officialCount[category] = (officialCount[category] || 0) + 1;
  });

  // 統計目前RPG測驗題數
  const quizCount = {};

  QUESTIONS.forEach(item => {
    const category = item.category || '其他';
    quizCount[category] = (quizCount[category] || 0) + 1;
  });

  // 優先使用正式題庫的分類
  const categories = officialQuestionBank.length
    ? Object.keys(officialCount)
    : [...new Set(QUESTIONS.map(item => item.category))];

  const totalOfficial = officialQuestionBank.length;
  const totalQuiz = QUESTIONS.length;

  // 建立「全部」選項
 let options = `<option value="全部">全部</option>`;

options += categories.map(category => {
  return `
    <option value="${escapeHtml(category)}">
      ${escapeHtml(category)}
    </option>
  `;
}).join('');
  $('#rpgCategory').innerHTML = options;

  start.onclick = startGame;
  $('#nextRpgBtn').onclick = next;
}
function startGame() {
  const category = $('#rpgCategory').value;

  const pool = category === '全部'
    ? QUESTIONS
    : QUESTIONS.filter(item => item.category === category);

  // 該分類尚未製作測驗題
  if (pool.length === 0) {
    alert(
      `「${category}」目前尚未建立選擇題。\n\n` +
      `正式題庫已有這個分類，但測驗題可以之後再慢慢補。`
    );
    return;
  }

  round = shuffle(pool).slice(0, Math.min(5, pool.length));

  index = 0;
  score = 0;
  lives = 3;
  wrong = [];

  $('#rpgStart').hidden = true;
  $('#rpgResult').hidden = true;
  $('#rpgGame').hidden = false;

  update();
  render();
}
function update(){ $('#rpgLives').textContent=lives;$('#rpgScore').textContent=score;$('#rpgProgress').textContent=Math.min(index+1,round.length||0); }
function render(){
 const q=round[index]; update(); $('#rpgQuestion').textContent=q.scenario;
 $('#rpgOptions').innerHTML=q.options.map((o,i)=>`<button class="rpg-option" data-i="${i}"><span class="rpg-option-letter">${String.fromCharCode(65+i)}</span><span>${escapeHtml(o)}</span></button>`).join('');
 document.querySelectorAll('.rpg-option').forEach(b=>b.onclick=()=>answer(Number(b.dataset.i)));
 $('#rpgFeedback').hidden=true;$('#nextRpgBtn').hidden=true;
}
function answer(choice){
 const q=round[index],ok=choice===q.correct;
 document.querySelectorAll('.rpg-option').forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add('correct');if(i===choice&&!ok)b.classList.add('wrong')});
 if(ok)score+=20;else{lives=Math.max(0,lives-1);wrong.push(q)} update();
 const fb=$('#rpgFeedback');fb.hidden=false;fb.className='rpg-feedback '+(ok?'good':'bad');fb.innerHTML=`<strong>${ok?'✅ 答對了！':'❌ 這個答法還不夠正確'}</strong><span>${escapeHtml(q.explanation)}</span>`;
 const nextBtn=$('#nextRpgBtn');nextBtn.hidden=false;nextBtn.textContent=(index===round.length-1||lives===0)?'查看本次成績 →':'下一通電話 →';
}
function next(){ if(index===round.length-1||lives===0)return finish(); index++;render(); }
function finish(){
 $('#rpgGame').hidden=true;const result=$('#rpgResult');result.hidden=false;
 const medal=score>=80?'🏆':score>=60?'🥈':'📘';
 const review=wrong.length?`<div class="rpg-review"><h4>建議再複習</h4>${wrong.map(q=>`<div class="rpg-review-item"><span><b>${escapeHtml(q.category)}</b>｜${escapeHtml(q.scenario)}</span><button class="small-btn" data-review="${q.id}">查看原題</button></div>`).join('')}</div>`:'<p>全部答對，今天的電話服務表現非常穩定！</p>';
 result.innerHTML=`<div class="result-medal">${medal}</div><h3>值勤任務完成</h3><div class="rpg-result-score">${score} 分</div><p>答對 ${Math.round(score/20)} 題，共 ${round.length} 題</p>${review}<div class="rpg-result-actions"><button class="primary-btn" id="rpgAgain">再挑戰一次</button><button class="small-btn" id="rpgBackHome">回到首頁</button></div>`;
 $('#rpgAgain').onclick=()=>{result.hidden=true;$('#rpgStart').hidden=false;$('#rpgProgress').textContent='0'};
 $('#rpgBackHome').onclick=()=>go('home');
 document.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>openDetail(Number(b.dataset.review)));
}
function escapeHtml(s){return String(s||'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
