import React, {useState} from 'react';
import BaseLayout from "./features/common/layouts/BaseLayout";

function App() {
    const [isAuthenticate, setAuthenticate] = useState(true);
  return (
    <div className={'h-screen w-screen'}>
        <BaseLayout/>
    </div>
  );
}

export default App;
