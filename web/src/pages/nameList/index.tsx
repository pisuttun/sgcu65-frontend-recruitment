import React, { useEffect, useState } from 'react';
import { GET } from '../../functions/api';
import { PageContainer, MainContainer, MenuContainer } from './styled';
import { User } from './type';
import Card from './card';

export default function NameListPage() {
  const [namelist, setNamelist] = useState<User[]>([]);
  const [shownlist, setShownlist] = useState<User[]>([]);

  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    console.log('fetching data');
    const fetchData = async () => {
      const res = (await GET('/users')) as User[];
      console.log(res);
      setNamelist(res);
      setShownlist(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('search', keyword);
      setShownlist(namelist.filter((i) => (i.name + i.surname + i.username).toLowerCase().includes(keyword)));
    }, 300);
    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <PageContainer>
      <MenuContainer>
        <h3>รายชื่อผู้ลงทะเบียน</h3>
        <input placeholder="ค้นหา" onChange={(e) => setKeyword(e.target.value.toLowerCase())} />
      </MenuContainer>
      <MainContainer>
        {shownlist.map((i) => (
          <Card user={i} />
        ))}
      </MainContainer>
    </PageContainer>
  );
}
