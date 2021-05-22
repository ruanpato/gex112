#include <stdio.h>

int x, y, d;
typedef long long ll;
int calculate_phi(int);
void extended_gcd(int, int);
ll fast_exp(ll, ll, ll);
int multiplicative_inverse(int, int);

int main(int argc, char **argv) {
    int n, e, c, phi;
    scanf("%d %d %d", &n, &e, &c);
    phi = calculate_phi(n);
    int inverted_mod = multiplicative_inverse(e, phi);
    printf("%lld\n", fast_exp(c, inverted_mod, n));

    return 0;
}

int calculate_phi(int n) {
    int result = n;
    for (int i = 2; i * i <= n; i++) {
        if(n % i == 0) {
            while(n % i == 0)
                n /= i;
            result -= result / i;
        }
    }
    if(n > 1)
        result -= result / n;

    return result;

}

ll fast_exp(ll p, ll q, ll m){
    ll r = 1;
    for (; q; q >>= 1) {
        if (q & 1)
            r = (r * p) % m;
        p = (p * p) % m;
    }
    return r;
}

void extended_gcd(int a, int b) {
    if (!b) {
        x = 1;
        y = 0;
        d = a;
        return;
    }
    extended_gcd(b, a % b);
    int x1 = y, y1 = x - (a / b) * y;
    x = x1, y = y1;
}

int multiplicative_inverse(int a, int m) {
    extended_gcd(a, m);
    return (x % m + m) % m;
}
