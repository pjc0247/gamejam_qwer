/* on_head_triggered
 *    트리거 조건 : 발사 쿨타임마다
 */
this.on_head_triggered = function(){
}

/* on_head_missile_triggered
 *    트리거 조건 : 매 0.1초마다
 *    파라미터
 *       missile : 미사일
 *    반환값
 *       미사일이 움직일 각도 (degree)
 */
this.on_head_missile_triggered = function(missile){
  return 45;
}
