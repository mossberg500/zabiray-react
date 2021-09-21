import React from 'react';
import './Offers.css';
import Offer from "./Offer/Offer";

// Profile* MyPosts
const Offers = (props) => {
   // debugger;

    let OffersElements = props.offerStat.offers.map(off => <Offer id={off.id}
                                                              name={off.name}
                                                              categoryId={off.categoryId}
                                                              supplierId={off.supplierId}
                                                              date={off.date}/>);

    /*реакт создай ссылку*/
    let NewOffers = React.createRef();


    let addNewOffers = () => {
         props.addOffer();

        // очищаем поле
        //   props.newOffersName('')
        //   NewOffers.current.value=''
    }

    let onChangeOffers = () => {
        let text = NewOffers.current.value;
        props.updateNewOffersName(text);
    }

    return (
        <div className="card">
            <div className="card-header card-header-warning">
                <h4 className="card-title">Список задач</h4>
            </div>
            <div className="card-body table-responsive">
                <h3>список Offer</h3>
                <div>
                    <div className="card-body table-responsive">

                        {/*<textarea onChange={onChangeOffers} ref={NewOffers}value="фиксированное значение"/>*/}
                        <textarea onChange={onChangeOffers} ref={NewOffers}
                                  value={ props.newOffersName }/>
                    </div>
                    <div>
                        {/* концепция callbeck-ов когда мы не вызываем функцию а отдаем её кому-то
                        чтобы ее этот кто-то вызвал.  addNewOffers  без скобок просто отдаем функцию*/}
                        {/*<button onClick={ () => props.addNewOffers(NewOffers.current.value) }>Добавить в список</button>*/}
                        <button onClick={addNewOffers}>Добавить в список</button>
                    </div>
                </div>


                <table className="table table-hover">
                    <thead className="text-warning">
                    <th>#</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Поставщик</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    </thead>
                    <tbody>
                    <tr>
                        { OffersElements }
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default Offers;
