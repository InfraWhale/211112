
// function nums() {
//     const lottoArr = []
//     for (let i = 1; i <= 45; i++) {
//         lottoArr.push(i)
//     }
//     return lottoArr
// }
//
// // 2. 숫자 6개 뽑기
// function randomNum(lottoArr) {
//
//     const lottoResult = []
//
//     for (let i = 0; i < 6; i++) {
//
//         const index = parseInt(Math.random() * lottoArr.length)
//
//         lottoResult.push(lottoArr[index]) // lottoResult 배열에 요소 추가하기
//         lottoArr.splice(index, 1) // 배열에서 요소 1개 제거
//     }
//
//     return lottoResult
// }
//
// function getLotto() {
//     const result = randomNum(nums())
//     return result
// }



const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click",(event) => {
    console.log(event)

    const target = document.getElementById("resultDiv")

    const balls = makeLottoNum()
    //clear all <h3> tags
    target.innerHTML ='' // 필요없는 코드 싹 지우기 위한 코드

    let str = ''

    for (const num of balls) {

        str += `<h3>${num}</h3>`

        target.innerHTML = str
    }

    // for (const num of balls) {
    //     const tag = document.createElement("h3")
    //     const textNode = document.createTextNode(num)
    //     tag.appendChild(textNode)
    //     target.appendChild(tag)
    // }


}, false)

function makeLottoNum(){

    const arr =[]

    for (let i = 0; i < 6; i++) {
        const tempNum =parseInt(Math.random() * 45) + 1
        // arr 안에 tempNum이 있다면
        if( arr.indexOf(tempNum) >=0 ) {
            console.log("중복")
            i--
            continue // 이러면 push 로 도달 안함
        }

        arr.push(tempNum)
    }

    arr.sort(function (a,b) {
        return a-b
    })

    // arr.sort(function (a,b) => a-b) 위아래는 같은식

    return arr

}

console.log(makeLottoNum())






// btn.addEventListener("click",{})


// function doA() {
//
// }
//
// btn.addEventListener("click,doA")
//3번째 방법은 잘 안씀
