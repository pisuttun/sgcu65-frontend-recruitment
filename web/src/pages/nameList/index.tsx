import React, { useEffect, useState } from 'react';
import { GET } from '../../functions/api';
import { PageContainer, MainContainer, MenuContainer } from './styled';
import { User } from './type';
import Card from './card';

export default function NameListPage() {
  const [namelist, setNamelist] = useState<User[]>([]);
  const [shownlist, setShownlist] = useState<User[]>([]);

  useEffect(() => {
    console.log('fetching data');
    const fetchData = async () => {
      const res = await GET('/users');
      console.log(res);
      //setNamelist(res);
      //setShownlist(res);
    };
    fetchData();
  }, []);
  return (
    <PageContainer>
      <MenuContainer>
        <h3>รายชื่อผู้ลงทะเบียน</h3>
        <input placeholder="ค้นหา" />
      </MenuContainer>
      <MainContainer>
        {shownlist.map((i) => (
          <Card user={i} />
        ))}
      </MainContainer>
    </PageContainer>
  );
}
