/* on_object_triggered
 *   트리거 조건 : 매 0.1초마다
 *   스코프 : 오브젝트
 */
this.on_object_triggered = function(){
}

/* on_object_missile_triggered
 *    트리거 조건 : 매 0.1초마다
 *    스코프 : 오브젝트
 *    파라미터
 *        missile : 미사일
 *    반환값
 *        미사일이 움직일 각도 (degree)
 */
this.on_object_missile_triggered = function(missile){
  return 45;
}
