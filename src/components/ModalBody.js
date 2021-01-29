import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { playButtonPress } from '../helpers/audio';
import {
  Modal,
  ModalButton,
  ModalContent,
  ModalFooter,
  SlideAnimation,
  ModalTitle,
} from 'react-native-modals';

import MContent from './Modal';

const ModalBody = ({ showModal, visible, curiousInfo }) => {
  return (
    <Modal
      visible={visible}
      onTouchOutside={showModal}
      modalAnimation={
        new SlideAnimation({
          slideFrom: 'bottom',
        })
      }
      modalTitle={<ModalTitle title="¿Sabías qué?" />}
      footer={
        <ModalFooter>
          <ModalButton text="OK" onPress={showModal} />
        </ModalFooter>
      }>
      <ModalContent>
        <MContent curiousInfo={curiousInfo} />
      </ModalContent>
    </Modal>
  );
};

export default ModalBody;

const styles = StyleSheet.create({});
