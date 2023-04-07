import {styled} from "@mui/material";

export const QuoteContainer = styled('div')`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
  margin-right: 100px;
`

export const QuoteQ = styled(`p`)`
  
  background: #D9D9D9;
  font-family: 'Inria Serif', serif;
  font-style: normal;
  font-size: 18px;
  line-height: 30px;
  padding: 8px 8px 8px 8px;
  /* identical to box height */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  color: #000000;
`

export const QuoteAuthor = styled(`p`)`
  background: #D9D9D9;
  font-family: 'Inria Serif', serif;
  font-size: 20px;
  line-height: 40px;
  padding-left: 8px;
  /* identical to box height */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom: 1px solid #000000;
  
`