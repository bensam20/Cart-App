import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';

function SignInToast() {
    const toast = useRef(null);

    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Sign In Required!', detail:'Please Sign In to Cart Items', life: 3000});
    }

    useEffect(() => {
      showInfo();
    })

  return (
    <div>
        <Toast ref={toast} />
    </div>
  )
}

export default SignInToast