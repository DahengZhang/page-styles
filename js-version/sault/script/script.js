window.onload = function() {
  sault('wrapper', 'box')
}

function sault(wrapper, box) {
  // 将wrapper下的所有box取出
  var wrapperElm = document.getElementById(wrapper)
  var boxElms = wrapperElm.getElementsByClassName(box)
  // 计算显示的列数
  var boxWidth = boxElms[0].offsetWidth
  var columnNum = Math.floor(document.documentElement.clientWidth / boxWidth)
  // 设置包裹层的宽度
  wrapperElm.style.cssText = 'width: '+ columnNum * boxWidth +'px; margin: 0 auto'
  var heightArr = []
  for (var i=0; i<boxElms.length; i++) {
    if (i < columnNum) {
      heightArr.push(boxElms[i].offsetHeight)
    } else {
      var minHeight = Math.min.apply(null, heightArr)
      var minIndex = getMinHeightIndex(heightArr, minHeight)
      boxElms[i].style.position = 'absolute'
      console.log(minIndex+", "+minHeight)
      boxElms[i].style.top = minHeight+'px'
      boxElms[i].style.left = boxElms[minIndex].offsetLeft+'px'
      heightArr[minIndex] += boxElms[i].offsetHeight
    }
  }
}

function getMinHeightIndex(arr,val) {
  for (var i in arr) {
    if (arr[i] == val) {
      return i
    }
  }
}