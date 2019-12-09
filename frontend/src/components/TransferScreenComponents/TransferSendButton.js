import React from 'react';
import { Text, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import buttonStyle from '../../styles/BottomButtonStyle';
import navigationPropTypes from '../../helpers/navigationPropTypes';
import newTransferPropTypes from '../../helpers/newTransferPropTypes';

function TransferSendButton({
  token, depositAmount, newTransfer, sendTransfer, navigation,
}) {
  return (
    <Button
      style={buttonStyle.button}
      iconLeft
      rounded
      success
      disabled={depositAmount < newTransfer.transferAmount || newTransfer.transferAmount === 0}
      onPress={() => {
        sendTransfer(newTransfer, token);
        navigation.navigate('Accounts');
      }}
    >
      <Icon name="ios-arrow-dropright" />
      <Text>Send</Text>
    </Button>
  );
}

TransferSendButton.propTypes = {
  token: PropTypes.string.isRequired,
  depositAmount: PropTypes.number.isRequired,
  newTransfer: newTransferPropTypes.isRequired,
  sendTransfer: PropTypes.func.isRequired,
  navigation: navigationPropTypes.isRequired,
};

export default withNavigation(TransferSendButton);
