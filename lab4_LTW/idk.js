function ptBac2() {
    let a = document.getElementById("input a").value;
    let b = document.getElementById("input b").value;
    let c = document.getElementById("input c").value;
    let delta = b**2 - 4*a*c;
    let res = "";
    if (delta < 0) res = "No result";
    if (delta == 0) res = -(b/(2*a)) + "";
    if (delta > 0) res = [(-b+Math.sqrt(delta))/(2*a), (-b-Math.sqrt(delta))/(2*a)] + "";
    document.getElementById("result").textContent = res;
}