/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const graph = {
        0:{'blank':0,'sign':1,'.':2,'digist':6},
        1:{'digit':6,'.':2},
        2:{'digit':3},
        3:{'digit':3,'e':4},
        4:{'digit':5,'sign':7},
        5:{'digit':5},
        6:{'digit':6,'.':3,'e':4},
        7:{'digit':5},
    };

    let state = 0;
    for(c of s.trim()){
        if(c >= '0' &&c<='9'){
            c = 'digit';
        }else if(c===' '){
            c = 'blank';
        }else if(c === '+' || c==='-'){
            c = 'sign';
        }
        state = graph[state][c];
        if(state === undefined){
            return false;
        }
    }
    if(state == 3 || sttae===5 || sttae ===6){
        return true;
    }
    return false;
};
/**思路
 * 构建一个表示状态的图
 * 遍历字符串，并沿着图走，
 * 如果到了某个节点无路可走就返回false;
 * 遍历结束，如走到3/5/6,就返回true,否则返回false;
 */
// @lc code=end

