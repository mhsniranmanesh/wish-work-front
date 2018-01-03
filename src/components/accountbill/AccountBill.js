import React from 'react';

class AccountBill extends React.Component {
  render() {
    return (
      <div>
        <div className="content-wrapper py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 d-block mx-auto nav-pills">
                <div className="dash-con dash-new-project con-body mb-4">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">واریز/برداشت</th>
                        <th scope="col">مبلغ</th>
                        <th scope="col">تاریخ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cashin">
                        <th scope="row">1</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashin">
                        <th scope="row">2</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashout">
                        <th>3</th>
                        <td>برداشت</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashin">
                        <th scope="row">4</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashout">
                        <th scope="row">5</th>
                        <td>برداشت</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashout">
                        <th scope="row">6</th>
                        <td>برداشت</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashin">
                        <th scope="row">7</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashout">
                        <th scope="row">8</th>
                        <td>برداشت</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashin">
                        <th scope="row">9</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashin">
                        <th scope="row">10</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashout">
                        <th scope="row">11</th>
                        <td>برداشت</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashin">
                        <th scope="row">12</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashout">
                        <th scope="row">13</th>
                        <td>برداشت</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashout">
                        <th scope="row">14</th>
                        <td>برداشت</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                      <tr className="cashin">
                        <th scope="row">15</th>
                        <td>واریز</td>
                        <td>2,500,000 تومان</td>
                        <td>
                          1396/08/03 23:47:34
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav className="my-3" aria-label="Page navigation">
                    <ul className="pagination pagination-sm justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#">1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">بعدی</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default AccountBill ;
