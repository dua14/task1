var arr = [1, 2, 3];
//method 1 using linear search 
function linaer(num) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {

            return i;
        }
    }

}console.log(linaer(1));

var a = binary(1);
console.log(a);
// method2 using binary search
function binary(x) {

    lb = 0, ub = arr.length - 1;
    while (lb <= ub) {
        m = lb + ub / 2;

        if (arr[m] == x) {
            return m;
        } else if (arr[m] > x) {
            ub = m - 1;
        } else if (arr[m] < x) {
            lb = m + 1;
        }
    }
    return -1;
}



