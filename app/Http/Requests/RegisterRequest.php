<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['not_regex:/^[A_Za-z\s.\'-]+$/', 'min:2', 'max:500', 'required'],
            'birthdate' => ['before_or_equal:' . Date('Y-m-d'), 'after:1980-01-01', 'required'],
            'username' => ['alpha_num', 'min:6', 'max:25', 'unique:users', 'required'],
            'email' => ['email', 'unique:users', 'required'],
            'password' => ['confirmed', 'min:6', 'required']
        ];
    }
}
