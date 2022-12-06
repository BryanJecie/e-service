<?php

namespace App\Domains\Auth\Models;

use App\Domains\Auth\Models\Traits\Attribute\UserAttribute;
use App\Domains\Auth\Models\Traits\Method\UserMethod;
use App\Domains\Auth\Models\Traits\Relationship\UserRelationship;
use App\Domains\Auth\Models\Traits\Scope\UserScope;
use App\Models\User as ModelsUser;

use Spatie\Permission\Traits\HasRoles;

class User extends ModelsUser
{
    public const TYPE_ADMIN = 'admin';
    public const TYPE_USER = 'user';

    use HasRoles,
        UserAttribute,
        UserMethod,
        UserRelationship,
        UserScope;
}
