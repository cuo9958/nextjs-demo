import Button from "@/components/button";
import { useEffect, useState } from "react";
import { getWinWidth } from "@/service/win";

export default function Test() {
  //页面加载状态
  const [pageshow, setPageShow] = useState(false);
  const [count, setCount] = useState(0);
  const wid = getWinWidth();

  useEffect(() => {
    //设置页面加载完成
    setPageShow(true);
  }, []);

  // 未加载完成不展示页面，缺点是服务端渲染无法处理更多内容
  if (!pageshow) return null;
  return (
    <div>
      <div>这是一行</div>
      <Button onClick={() => setCount(count + 1)}>确定按钮:{count}</Button>
      <div>宽度：{window.document.body.offsetWidth}</div>
    </div>
  );
}
