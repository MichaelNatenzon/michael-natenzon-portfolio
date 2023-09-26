import styled from "styled-components";

import LoadingButton from "@mui/lab/LoadingButton";

export const TransactionSentContainer = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  text-align: center;
`;

export const ArialContainer = styled.div`
  font-family: arial;
`;

export const EthReceiverContainer = styled.div.attrs({
  className: "input-group",
})``;

export const EthReceiverContent = styled.div.attrs({
  className: "input-group-prepend",
})``;

export const EthReceiverText = styled.span.attrs({
  className: "input-group-text",
})``;

export const EthReceiverAddressInput = styled.textarea.attrs({
  className: "form-control",
})``;

export const CompletedTransactionContainer = styled.div`
  padding-top: 25px;
`;

export const CompletedTransactionButton = styled.button`
  color: #000;
`;

export const MetaMaskLoginButtonContainer = styled.button`
  background-color: transparent;
  border-color: transparent;
`;

export const SendQtyAndButtonContainer = styled.span.attrs({
  className: "input-group mb-3",
})`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const SendUsdCurrencySymbolContainer = styled.div.attrs({
  className: "input-group-prepend",
})``;

export const SendUsdCurrencySymbol = styled.span.attrs({
  className: "input-group-text",
})`
  border-radius: 0.25rem 0px 0px 0.25rem;
`;

export const SendUsdInputContainer = styled.div`
  width: 70px;
`;

export const SendUsdInput = styled.input.attrs({
  type: "text",
  className: "form-control",
})`
  border-radius: 0px;
`;

export const EthUsdConversionContainer = styled.div.attrs({
  className: "input-group-append",
})``;

export const EthUsdConversionTextContainer = styled.span.attrs({
  className: "input-group-text",
})`
  font-family: arial;
  font-size: 14px;
  padding-right: 0px;
  border-radius: 0px 0.25rem 0.25rem 0px;
`;

export const EthUsdConversionText = styled.span`
  margin-top: 3px;
`;

export const ReloadEthButton = styled(LoadingButton)`
  height: 24px;
  padding-left: 0px;
  padding-right: 0px;
`;

export const SendEthButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 8px;
`;

export const SendEthButton = styled.button.attrs({
  className: "btn btn-primary",
})`
  font-style: arial;
`;
