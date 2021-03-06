<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/29/15
 * Time: 7:22 AM
 */

class TransactionController extends BaseController{

    public function getIndex(){
        $id = \Illuminate\Support\Facades\Input::get('id');
        return Customer::find('id')->transactions;
    }
    public function postIndex()
    {
        if(Input::has('name', 'amount')){
            $input = Input::all();
            if ($input['name'] == '' || $input['amount'] == '') {
                return Response::make('You need to fill all of the input fields', 400);
            }
            $transaction = new Transaction;
            $transaction->name = $input['name'];
            $transaction->amount = $input['amount'];
            $id = $input['customer_id'];
            Customer::find($id)->transactions->save($transaction);
            return $transaction;
        }else{
                return Response::make('You need to fill all of the input fields', 400);
        }

    }

    public function deleteIndex() {
        $id = Input::get('id');
        $transaction = Transaction::find($id);
        $transaction->delete();

        return $id;
    }
}