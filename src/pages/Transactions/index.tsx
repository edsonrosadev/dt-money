import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TranssactionsTable } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TranssactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  <td>R$ 12.000,00</td>
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

          </tbody><tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">
                  <td>- R$ 59,00</td>
                </PriceHighLight>
               </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Aluguel</td>
              <td>
                <PriceHighLight variant="outcome">
                <td>- R$ 1.200,00</td>
                </PriceHighLight>
              </td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
        </TranssactionsTable>
      </TransactionsContainer>
    </div>
  )
}