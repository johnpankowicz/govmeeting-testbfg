﻿namespace Microsoft.eShopWeb.ApplicationCore.Authorization
{
    public static class Constants
    {
        public const string AUTH_KEY = "AuthKeyOfDoomThatMustBeAMinimumNumberOfBytes";

        // TODO: Don't use this in production
        public const string DEFAULT_PASSWORD = "Pass@word1";

        // TODO: Change this to an environment variable
        public const string JWT_SECRET_KEY = "SecretKeyOfDoomThatMustBeAMinimumNumberOfBytes";

        public static class Roles
        {
            public const string ADMINISTRATORS = "Administrators";
        }
    }
}
