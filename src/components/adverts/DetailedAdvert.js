import React, { useEffect, useState } from 'react';
import Advert from './Advert';
import { useParams } from 'react-router-dom';
import { getAdvertDetail, deleteAdvert } from './service';
import Layout from '../layout/Layout';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdvertPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  display: block;
`;

export const DetailedAdvert = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState({});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteAdvert(advert.id);
    setShowModal(false);
    navigate('/');
  };

  useEffect(() => {
    getAdvertDetail(id)
      .then((response) => {
        setAdvert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Layout title="Advert Detail">
      <Advert
        id={id}
        name={advert.name}
        sale={advert.sale}
        price={advert.price}
        tags={advert.tags}
      />
      {advert.photo && (
        <StyledAdvertPhoto src={advert.photo} alt="Advert Photo" />
      )}
      <Button onClick={() => setShowModal(true)}>Delete</Button>
      <Button onClick={() => navigate('/')}>Back</Button>
      {showModal && (
        <Modal
          title="Confirmation"
          message="Are you sure you want to delete this advert?"
          onCancel={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </Layout>
  );
};
