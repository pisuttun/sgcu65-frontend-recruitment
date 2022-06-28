import React from 'react';
import { FormBox, KiteImg, MenuContainer, PageContainer, SubmitBtn, TextField, ErrorMsg } from './styled';
import { useForm } from 'react-hook-form';
import kite from '../../assets/kite.png';
import { POST_JSON } from '../../functions/api';

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
    //await POST_JSON('/api/register', request);
  };

  return (
    <PageContainer>
      <KiteImg src={kite} />
      <MenuContainer>
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 style={{ marginTop: '5%', marginLeft: '10%' }}>ลงทะเบียน</h2>
            <h4 style={{ marginLeft: '10%', marginBottom: '0' }}>กรุณากรอกข้อมูลให้ครบถ้วน</h4>
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
          <TextField placeholder="รหัสผ่าน" type="password" {...register('pass', { required: true })} />
          {errors.pass && <ErrorMsg>กรุณากรอกรหัสผ่าน</ErrorMsg>}
          <TextField
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            {...register('confirmPass', { required: true, validate: (value) => value === watch('pass') })}
          />
          {errors.confirmPass && <ErrorMsg>รหัสผ่านไม่ตรงกัน</ErrorMsg>}
          <SubmitBtn type="submit" />
        </FormBox>
      </MenuContainer>
    </PageContainer>
  );
}
