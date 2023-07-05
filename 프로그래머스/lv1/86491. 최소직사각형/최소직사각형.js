function solution(sizes) {
    const width = [];
    const height = [];
    for(let i = 0; i < sizes.length; i++){
        let max = Math.max(sizes[i][0], sizes[i][1]);
        let min = Math.min(sizes[i][0], sizes[i][1]); 
        width.push(max);
        height.push(min);
    }
    answer=Math.max(...width)*Math.max(...height)
    return answer;
}