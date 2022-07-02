import React from 'react';
import { Store } from 'react-notifications-component';
import { FormBox, KiteImg, MenuContainer, PageContainer, SubmitBtn, TextField, ErrorMsg } from './styled';
import { useForm } from 'react-hook-form';
import kite from '../../assets/kite.png';
import { POST_JSON } from '../../functions/api';
import SocialBar from './socialBar';

interface IFormInput {
  name: String;
  surname: String;
  username: String;
  email: String;
  pass: String;
  confirmPass: String;
}

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    const request = {
      name: data.name,
      surname: data.surname,
      username: data.username,
      email: data.email,
      password: data.pass,
    };
    console.log('req:', request);
    try {
      await POST_JSON('/users', request);
      Store.addNotification({
        container: 'top-right',
        message: 'สมัครสมาชิกเรียบร้อย ขอบคุณที่ลงทะเบียน',
        type: 'success',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.log(error);
      Store.addNotification({
        container: 'top-right',
        // @ts-ignore
        message: error['message'] || 'error',
        type: 'danger',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };

  return (
    <PageContainer>
      <KiteImg src={kite} />
      <MenuContainer>
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 style={{ margin: '10% 0 0 10%', fontSize: '2.5rem' }}>ลงทะเบียน</h1>
            <p style={{ margin: '0 0 0 10%', fontSize: '0.8rem' }}>กรุณากรอกข้อมูลให้ครบถ้วน</p>
          </div>
          <TextField placeholder="ชื่อ" {...register('name', { required: true })} />
          {errors.name && <ErrorMsg>กรุณากรอกชื่อ</ErrorMsg>}
          <TextField placeholder="่นามสกุล" {...register('surname', { required: true })} />
          {errors.surname && <ErrorMsg>กรุณากรอกนามสกุล</ErrorMsg>}
          <TextField placeholder="ชื่อผู้ใช้" {...register('username', { required: true, pattern: /[a-zA-Z0-9]/ })} />
          {errors.username && <ErrorMsg>กรุณากรอกชื่อผู้ใช้ประกอบด้วยภาษาอังกฤษและตัวเลขเท่านั้น</ErrorMsg>}
          <TextField
            placeholder="อีเมล์"
            {...register('email', { required: true, validate: (value) => value.includes('@') })}
          />
          {errors.email && <ErrorMsg>กรุณากรอกอีเมล์ที่ถูกต้อง</ErrorMsg>}
          <TextField placeholder="รหัสผ่าน" type="password" {...register('pass', { required: true, minLength: 8 })} />
          {errors.pass && <ErrorMsg>กรุณากรอกรหัสผ่านความยาวอย่างน้อย 8 ตัวอักษร</ErrorMsg>}
          <TextField
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            {...register('confirmPass', { required: true, validate: (value) => value === watch('pass') })}
          />
          {errors.confirmPass && <ErrorMsg>รหัสผ่านไม่ตรงกัน</ErrorMsg>}
          <SubmitBtn type="submit" />
        </FormBox>
        <SocialBar />
      </MenuContainer>
    </PageContainer>
  );
}
