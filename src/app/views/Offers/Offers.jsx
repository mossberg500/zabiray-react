import React from 'react';
import './Offers.css';
import Offer from "./Offer/Offer";

const Offers = (props) => {
    let newOffers = props.offersStat.offers.map(off => <Offer id={off.id}
                                                              name={off.name}
                                                              categoryId={off.categoryId}
                                                              supplierId={off.supplierId}
                                                              date={off.date}/>);

    /*реакт создай ссылку*/
    let NewOffers = React.createRef();

    let addNewOffers = () => {

        let text = NewOffers.current.value;
        /*alert(text);*/
        /*передаем данные в функцию из stat-ов*/

        props.addNewOffers(text);
        // очищаем поле
        NewOffers.current.value = ''
    }

    return (
        <div class="card">
            <div class="card-header card-header-warning">
                <h4 class="card-title">Список задач</h4>
            </div>
            <div class="card-body table-responsive">
                <h3>список Offer</h3>
                <div>
                    <div className="card-body table-responsive">

                        <textarea ref={NewOffers}></textarea>



                    </div>
                    <div>
                        {/* концепция callbeck-ов когда мы не вызываем функцию а отдаем её кому-то
                        чтобы ее этот кто-то вызвал.  addNewOffers  без скобок просто отдаем функцию*/}
                        {/*<button onClick={ () => props.addNewOffers(NewOffers.current.value) }>Добавить в список</button>*/}
                        <button onClick={ addNewOffers }>Добавить в список</button>
                    </div>
                </div>


                <table class="table table-hover">
                    <thead class="text-warning">
                    <th>#</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Поставщик</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    </thead>
                    <tbody>
                    <tr>
                        {newOffers}
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default Offers;
