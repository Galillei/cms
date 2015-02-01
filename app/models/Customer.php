<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/27/15
 * Time: 6:43 AM
 */

class Customer extends Eloquent{
    public function transactions()
    {
        return $this->hasMany('Transaction');
    }
}