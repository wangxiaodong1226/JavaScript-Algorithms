动态规划

动态规划是算法设计中的一种思想

它将一个问题分解为相互重叠的子问题，
通过反复求解子问题，求解原来的问题；

斐波那契数列
定义子问题 F(n) = F(n-1)+F(n-2);
反复执行，从2循环到n，执行上述公式；

动态规划 vs 分而治之
子问题是独立的，分而治之；
子问题重叠的，动态规划