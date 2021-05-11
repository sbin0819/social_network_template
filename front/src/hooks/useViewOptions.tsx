//TODO: 화면상에서 일어나는 이벤트 종료, Layout 변경등에 대한 컴포넌트
import React, { useState } from 'react';

const useViewOptions = () => {
  const [options, setOptions] = useState({
    onLeft: true,
    onRight: true,
    rightEvent: true,
  });

  React.useEffect(() => {}, [options]);

  const onClick = {
    onCloseLeftLayout: () => {
      console.log('close');
      setOptions((state) => ({ ...state, onLeft: false }));
    },
    onOpenLeftLayout: () => {
      setOptions((state) => ({ ...state, onLeft: true }));
    },
    onCloseRightLayout: () => {
      setOptions((state) => ({ ...state, onRight: false }));
    },
    onOpenRightLayout: () => {
      setOptions((state) => ({ ...state, onRight: true }));
    },
    onCloseRightEvent: () => {
      setOptions((state) => ({ ...state, rightEvent: false }));
    },
    onOpenRightEvent: () => {
      setOptions((state) => ({ ...state, rightEvent: true }));
    },
  };

  return { options, onClick };
};

export default useViewOptions;
