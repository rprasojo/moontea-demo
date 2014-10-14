window.Atlantic = window.Atlantic || {};
Atlantic.Janrain = Atlantic.Janrain || {};
Atlantic.CDS = Atlantic.CDS || {};
Atlantic.Janrain.Urls = {
    httpLoad: "http://widget-cdn.rpxnow.com/load/theatlantic",
    httpsLoad: "https://rpxnow.com/load/theatlantic",
    ping: "https://profiles.theatlantic.com/api/1.0/ping/",
    emailSubscriptions: "https://profiles.theatlantic.com/api/1.0/subscriptions/email/",
    magazineSearch: "https://profiles.theatlantic.com/api/1.0/subscriptions/magazine/search/",
    magazineVerify: "https://profiles.theatlantic.com/api/1.0/subscriptions/magazine/verify/"
};
Atlantic.Janrain.templateHtml = "\u003C!\u002D\u002D\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A    SIGNIN SCREENS:\u000A    The following screens are part of the sign in user workflow. For a\u000A    complete out\u002Dof\u002Dthe\u002Dbox sign in experience, these screens must be\u000A    included on the page where you are implementing sign in and registration.\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A\u002D\u002D\u003E\u000A\u000A\u003C!\u002D\u002D signIn:\u000AThis is the starting point for sign in and registration. This screen is\u000Arendered by default. In order to change this behavior, the Flow must be\u000Aedited.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022signIn\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ESign Up / Sign In\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cdiv class\u003D\u0022capture_signin\u0022\u003E\u000A        \u003Ch2\u003EWith your existing account from\u003C/h2\u003E\u000A        {* loginWidget *} \u003Cbr /\u003E\u000A    \u003C/div\u003E\u000A    \u003Cdiv class\u003D\u0022capture_backgroundColor\u0022\u003E\u000A        \u003Cdiv class\u003D\u0022capture_signin\u0022\u003E\u000A            \u003Ch2\u003EWith your email and password\u003C/h2\u003E\u000A            {* #signInForm *}\u000A                {* signInEmailAddress *}\u000A                {* currentPassword *}\u000A                \u003Cdiv class\u003D\u0022capture_form_item\u0022\u003E\u000A                    \u003Ca href\u003D\u0022#\u0022 data\u002Dcapturescreen\u003D\u0022forgotPassword\u0022\u003EForgot your password?\u003C/a\u003E\u000A                \u003C/div\u003E\u000A                \u003Cdiv class\u003D\u0022capture_rightText\u0022\u003E\u000A                    \u003Cbutton class\u003D\u0022capture_secondary capture_btn capture_primary\u0022 type\u003D\u0022submit\u0022\u003E\u003Cspan class\u003D\u0022janrain\u002Dicon\u002D16 janrain\u002Dicon\u002Dkey\u0022\u003E\u003C/span\u003E Sign In\u003C/button\u003E\u000A                    \u003Ca href\u003D\u0022#\u0022 id\u003D\u0022capture_signIn_createAccountButton\u0022 data\u002Dcapturescreen\u003D\u0022traditionalRegistration\u0022 class\u003D\u0022capture_secondary capture_createAccountButton capture_btn capture_primary\u0022\u003ECreate Account\u003C/a\u003E\u000A                \u003C/div\u003E\u000A            {* /signInForm *}\u000A        \u003C/div\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D returnSocial:\u000AThis is the screen the user sees in place of the signIn screen if they\u0027ve\u000Aalready signed in with a social account on this site. Rendering of this\u000Ascreen is defined in the Flow only when the \u0027janrainLastAuthMethod\u0027 cookie\u000Ais set to\u0027socialSignin\u0027.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022returnSocial\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ESign In\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cdiv class\u003D\u0022capture_signin\u0022\u003E\u000A        \u003Ch2\u003EWelcome back, {* welcomeName *}!\u003C/h2\u003E\u000A        {* loginWidget *}\u000A        \u003Cdiv class\u003D\u0022capture_centerText switchLink\u0022\u003E\u003Ca href\u003D\u0022#\u0022 data\u002Dcancelcapturereturnexperience\u003D\u0022true\u0022\u003EUse another account\u003C/a\u003E\u003C/div\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D returnTraditional:\u000AThis is the screen the user sees in place of the signIn screen if they\u0027ve\u000Aalready signed in with a traditional account on this site. Rendering of this\u000Ascreen is defined in the Flow only when the \u0027janrainLastAuthMethod\u0027 cookie\u000Ais set to\u0027traditionalSignin\u0027.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022returnTraditional\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ESign In\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Ch2 class\u003D\u0022capture_centerText\u0022\u003E\u003Cspan id\u003D\u0022traditionalWelcomeName\u0022\u003EWelcome back!\u003C/span\u003E\u003C/h2\u003E\u000A    \u003Cdiv class\u003D\u0022capture_backgroundColor\u0022\u003E\u000A        {* #signInForm *}\u000A            {* signInEmailAddress *}\u000A            {* currentPassword *}\u000A            \u003Cdiv class\u003D\u0022capture_form_item capture_leftText\u0022\u003E\u000A                \u003Ca href\u003D\u0022#\u0022 data\u002Dcapturescreen\u003D\u0022forgotPassword\u0022\u003EForgot your password?\u003C/a\u003E\u000A            \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_form_item capture_rightText\u0022\u003E\u000A                \u003Cbutton class\u003D\u0022capture_secondary capture_btn capture_primary\u0022 type\u003D\u0022submit\u0022\u003E\u003Cspan class\u003D\u0022janrain\u002Dicon\u002D16 janrain\u002Dicon\u002Dkey\u0022\u003E\u003C/span\u003E Sign In\u003C/button\u003E\u000A            \u003C/div\u003E\u000A        {* /signInForm *}\u000A        \u003Cdiv class\u003D\u0022capture_centerText switchLink\u0022\u003E\u003Ca href\u003D\u0022#\u0022 data\u002Dcancelcapturereturnexperience\u003D\u0022true\u0022\u003EUse another account\u003C/a\u003E\u003C/div\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D accountDeactivated:\u000A    This screen is rendered if the user\u0027s account is deactivated. Screen\u000A    rendering is handled in janrain\u002Dinit.js.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022accountDeactivated\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EDeactivated Account \u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cdiv class\u003D\u0022content_wrapper\u0022\u003E\u000A        \u003Cp\u003EYour account has been deactivated.\u003C/p\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u000A\u000A\u003C!\u002D\u002D\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A    REGISTRATION SCREENS:\u000A    The following screens are part of the registration user workflow. For a\u000A    complete out\u002Dof\u002Dthe\u002Dbox registration experience, these screens must be\u000A    included on the page where you are implementing sign in and\u000A    registration.\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A\u002D\u002D\u003E\u000A\u000A\u003C!\u002D\u002D socialRegistration:\u000A    When a user clicks an IDP and does not already have an account in your\u000A    capture application, this screen is rendered. This behavior is defined\u000A    in the Flow.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022socialRegistration\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ERegister with \u003Ci\u003EThe Atlantic\u003C/i\u003E\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Ch2\u003EThanks. We just need a little more info.\u003C/h2\u003E\u000A    {* #socialRegistrationForm *}\u000A        {* firstName *}\u000A        {* lastName *}\u000A        {* addressPostalCode *}\u000A        {* emailAddress *}\u000A        {* displayName *}\u000A        {* acceptTerms *}\u000A        \u003Ca href\u003D\u0022http://www.theatlantic.com/privacy\u002Dpolicy/\u0022 target\u003D\u0022_blank\u0022\u003EPrivacy Policy\u003C/a\u003E | \u003Ca href\u003D\u0022http://www.theatlantic.com/faq/\u0022 target\u003D\u0022_blank\u0022\u003EFrequently Asked Questions\u003C/a\u003E\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            \u003Cdiv class\u003D\u0022capture_left\u0022\u003E\u000A                {* backButton *}\u000A            \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_right\u0022\u003E\u000A                \u003Cinput value\u003D\u0022Create Account\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A            \u003C/div\u003E\u000A        \u003C/div\u003E\u000A    {* /socialRegistrationForm *}\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D traditionalRegistration:\u000A    When a user clicks the \u0027Create Account\u0027 button this screen is rendered.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022traditionalRegistration\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ERegister with \u003Ci\u003EThe Atlantic\u003C/i\u003E\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cp\u003EPlease fill out the fields below.\u003C/p\u003E\u000A    \u003Cp\u003EAlready have an account? \u003Ca id\u003D\u0022capture_traditionalRegistration_navSignIn\u0022 href\u003D\u0022#\u0022 data\u002Dcapturescreen\u003D\u0022signIn\u0022\u003ESign in.\u003C/a\u003E\u003C/p\u003E\u000A    {* #registrationForm *}\u000A        {* firstName *}\u000A        {* lastName *}\u000A        {* addressPostalCode *}\u000A        {* emailAddress *}\u000A        {* displayName *}\u000A        {* newPassword *}\u000A        {* newPasswordConfirm *}\u000A        {* acceptTerms *}\u000A        \u003Ca href\u003D\u0022http://www.theatlantic.com/privacy\u002Dpolicy/\u0022 target\u003D\u0022_blank\u0022\u003EPrivacy Policy\u003C/a\u003E | \u003Ca href\u003D\u0022http://www.theatlantic.com/faq/\u0022 target\u003D\u0022_blank\u0022\u003EFrequently Asked Questions\u003C/a\u003E\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            \u003Cdiv class\u003D\u0022capture_left\u0022\u003E\u000A                {* backButton *}\u000A            \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_right\u0022\u003E\u000A                \u003Cinput value\u003D\u0022Create Account\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A            \u003C/div\u003E\u000A        \u003C/div\u003E\u000A    {* /registrationForm *}\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D emailVerificationNotification:\u000A    This screen is rendered after a user has registered. In the case of\u000A    traditional registration, this screen is always rendered after the user\u000A    completes registration on the traditionalRegistration screen. In the\u000A    case of social registration, this screen is only rendered if the data\u000A    returned from the IDP does not contain a verified email address.\u000A    Twitter is an example of an IDP that does not return a verified email.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022emailVerificationNotification\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EAwaiting Email Verification\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cp\u003EWe have sent a confirmation email to {* emailAddressData *}. Please check your email and click on the link to activate your account.\u003C/p\u003E\u000A    \u003Cp\u003EIf you have not received a confirmation email \u003Ca href\u003D\u0022#\u0022 data\u002Dcapturescreen\u003D\u0022verifyEmail\u0022\u003Eclick here\u003C/a\u003E to have it resent.\u003C/p\u003E\u000A    \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A        \u003Ca href\u003D\u0022#\u0022 onclick\u003D\u0022janrain.capture.ui.modal.close()\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003EClose\u003C/a\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D termsAgreement:\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022termsAgreement\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ETerms have changed\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cp\u003E\u000A        You must agree to the new Terms.\u000A    \u003C/p\u003E\u000A    \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A        {* #termsAgreementForm *}\u000A        \u003Cinput value\u003D\u0022Agree\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A        {* /termsAgreementForm *}\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A    FORGOT PASSWORD SCREENS:\u000A    The following screens are part of the forgot password user workflow. For\u000A    a complete out\u002Dof\u002Dthe\u002Dbox registration experience, these screens must be\u000A    included on the page where you are implementing forgot password\u000A    functionality.\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A\u002D\u002D\u003E\u000A\u000A\u003C!\u002D\u002D forgotPassword:\u000A    Entry point into the forgot password user workflow. This screen is\u000A    rendered when the user clicks on the \u0027Forgot your password?\u0027 link on the\u000A    signIn screen.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022forgotPassword\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EForgot Password\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Ch2\u003EWe\u0027ll send you a link to create a new password.\u003C/h2\u003E\u000A    {* #forgotPasswordForm *}\u000A        {* signInEmailAddress *}\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            \u003Cdiv class\u003D\u0022capture_left\u0022\u003E\u000A                {* backButton *}\u000A            \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_right\u0022\u003E\u000A                \u003Cinput value\u003D\u0022Send\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A            \u003C/div\u003E\u000A        \u003C/div\u003E\u000A    {* /forgotPasswordForm *}\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D forgotPasswordSuccess:\u000A    When the user submits an email address on the forgotPassword screen,\u000A    this screen is rendered.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022forgotPasswordSuccess\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EForgot Password\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A        \u003Cp\u003EWe\u0027ve sent an email with instructions to create a new password. Your existing password has not been changed.\u003C/p\u003E\u000A    \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A        \u003Ca href\u003D\u0022#\u0022 onclick\u003D\u0022janrain.capture.ui.modal.close()\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003EClose\u003C/a\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u000A\u000A\u000A\u003C!\u002D\u002D\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A    MERGE ACCOUNT SCREENS:\u000A    The following screens are part of the account merging user workflow. For\u000A    a complete out\u002Dof\u002Dthe\u002Dbox account merging experience, these screens must\u000A    be included on the page where you are implementing account merging\u000A    functionality.\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A\u002D\u002D\u003E\u000A\u000A\u003C!\u002D\u002D mergeAccounts:\u000A    This screen is rendered if the user created their account through\u000A    traditional registration and then tries to sign in with an IDP that\u000A    shares the same email address that exists in their user record.\u000A\u000A    NOTE! You will notice special tags you see on this screen. These tags,\u000A    such as \u0027{| current_displayName |}\u0027 are rendered by the Janrain Capture\u000A    Widget in a way similar to JTL tags, but are more limited. We currently\u000A    only support modifying the text in this screen through the Flow. You\u000A    can, however, add your own markup and text throughout this screen as you\u000A    see fit.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022mergeAccounts\u0022\u003E\u000A    \u003Cdiv id\u003D\u0022capture_mergeAccounts_mergeAccounts_mergeOptionsContainer\u0022 class\u003D\u0022janrain\u002Dcapture\u002Dui capture\u002Dui\u002Dcontent capture_screen_container capture_mergeAccounts_mergeOptionsContainer\u0022\u003E\u000A        \u003Cdiv class\u003D\u0022capture\u002Dheader\u0022\u003E\u000A            \u003Ch2\u003EYou have signed in with more than one account. Would you like to link them?\u003C/h2\u003E\u000A            {* mergeAccounts {\u0022custom\u0022: true} *}\u000A        \u003C/div\u003E\u000A\u000A        \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A            \u003Cdiv class\u003D\u0022capture_icon_col\u0022\u003E\u000A                {| rendered_current_photo |}\u000A            \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_displayName_col\u0022\u003E\u000A                {| current_displayName |}\u003Cbr /\u003E\u000A                {| current_emailAddress |}\u000A            \u003C/div\u003E\u000A            \u003Cspan class\u003D\u0022capture_mergeProvider janrain\u002Dprovider\u002Dicon\u002D24 janrain\u002Dprovider\u002Dicon\u002D{| current_provider_lowerCase |}\u0022\u003E\u003C/span\u003E\u000A        \u003C/div\u003E\u000A        \u003Cdiv class\u003D\u0022capture_dashed\u0022\u003E\u000A            \u003Cdiv class\u003D\u0022capture_mergeCol capture_left\u0022\u003E\u000A                \u003Cp class\u003D\u0022capture_bigText\u0022\u003E{| foundExistingAccountText |} \u003Cb\u003E{| current_emailAddress |}\u003C/b\u003E.\u003C/p\u003E\u000A                \u003Cdiv class\u003D\u0022capture_hover capture_bigText\u0022\u003E\u000A                    \u003Cdiv class\u003D\u0022capture_popup_container\u0022\u003E\u000A                        \u003Cspan class\u003D\u0022capture_popup\u002Darrow\u0022\u003E\u003C/span\u003E{| moreInfoHoverText |}\u003Cbr /\u003E\u000A                        {| existing_displayName |} \u002D {| existing_provider |} : {| existing_siteName |} {| existing_createdDate |}\u000A                    \u003C/div\u003E\u000A                    {| moreInfoText |}\u000A                \u003C/div\u003E\u000A            \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_mergeCol capture_mergeExisting_col capture_right\u0022\u003E\u000A                \u003Cdiv class\u003D\u0022capture_backgroundColor capture_border\u0022\u003E\u000A                    {| rendered_existing_provider_photo |}\u000A                    \u003Cdiv class\u003D\u0022capture_displayName_col\u0022\u003E\u000A                        {| existing_displayName |}\u003Cbr\u003E\u000A                        \u003Ci\u003E({| existing_provider |})\u003C/i\u003E\u003Cbr /\u003E\u000A                    \u003C/div\u003E\u000A                    \u003Cdiv class\u003D\u0022capture_centerText capture_smallText\u0022\u003ECreated {| existing_createdDate |} at {| existing_siteName |}\u003C/div\u003E\u000A                \u003C/div\u003E\u000A            \u003C/div\u003E\u000A        \u003C/div\u003E\u000A        \u003Cdiv id\u003D\u0022capture_mergeAccounts_form_collection_mergeAccounts_mergeRadio\u0022 class\u003D\u0022capture_form_collection_merge_radioButtonCollection capture_form_collection capture_elementCollection capture_form_collection_mergeAccounts_mergeRadio\u0022 data\u002Dcapturefield\u003D\u0022undefined\u0022\u003E\u000A            \u003Cdiv id\u003D\u0022capture_mergeAccounts_form_item_mergeAccounts_mergeRadio_1_0\u0022 class\u003D\u0022capture_form_item capture_form_item_mergeAccounts_mergeRadio capture_form_item_mergeAccounts_mergeRadio_1_0 capture_toggled\u0022 data\u002Dcapturefield\u003D\u0022undefined\u0022\u003E\u000A                \u003Clabel for\u003D\u0022capture_mergeAccounts_mergeAccounts_mergeRadio_1_0\u0022\u003E\u000A                    \u003Cinput id\u003D\u0022capture_mergeAccounts_mergeAccounts_mergeRadio_1_0\u0022 data\u002Dcapturefield\u003D\u0022undefined\u0022 data\u002Dcapturecollection\u003D\u0022true\u0022 value\u003D\u00221\u0022 type\u003D\u0022radio\u0022 class\u003D\u0022capture_mergeAccounts_mergeRadio_1_0 capture_input_radio\u0022 checked\u003D\u0022checked\u0022 name\u003D\u0022mergeAccounts_mergeRadio\u0022\u003E\u000A                        {| connectLegacyRadioText |}\u000A                \u003C/label\u003E\u000A            \u003C/div\u003E\u000A            \u003Cdiv id\u003D\u0022capture_mergeAccounts_form_item_mergeAccounts_mergeRadio_2_1\u0022 class\u003D\u0022capture_form_item capture_form_item_mergeAccounts_mergeRadio capture_form_item_mergeAccounts_mergeRadio_2_1\u0022 data\u002Dcapturefield\u003D\u0022undefined\u0022\u003E\u000A                \u003Clabel for\u003D\u0022capture_mergeAccounts_mergeAccounts_mergeRadio_2_1\u0022\u003E\u000A                    \u003Cinput id\u003D\u0022capture_mergeAccounts_mergeAccounts_mergeRadio_2_1\u0022 data\u002Dcapturefield\u003D\u0022undefined\u0022 data\u002Dcapturecollection\u003D\u0022true\u0022 value\u003D\u00222\u0022 type\u003D\u0022radio\u0022 class\u003D\u0022capture_mergeAccounts_mergeRadio_2_1 capture_input_radio\u0022 name\u003D\u0022mergeAccounts_mergeRadio\u0022\u003E\u000A                        {| createRadioText |} {| current_provider |}\u000A                \u003C/label\u003E\u000A            \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_tip\u0022 style\u003D\u0022display:none\u003B\u0022\u003E\u000A        \u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_tip_validating\u0022 data\u002Delementname\u003D\u0022mergeAccounts_mergeRadio\u0022\u003EValidating\u003C/div\u003E\u000A            \u003Cdiv class\u003D\u0022capture_tip_error\u0022 data\u002Delementname\u003D\u0022mergeAccounts_mergeRadio\u0022\u003E\u003C/div\u003E\u000A        \u003C/div\u003E\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            {| connect_button |}\u000A            {| create_button |}\u000A        \u003C/div\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D traditionalAuthenticateMerge:\u000A    When the user elects to merge their traditional and social account, the\u000A    user will see this screen. They will then enter their current sign in\u000A    credentials and, upon successful authorization, the accounts will be\u000A    merged.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022traditionalAuthenticateMerge\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ESign in to complete account merge\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cdiv class\u003D\u0022capture_signin\u0022\u003E\u000A        {* #signInForm *}\u000A            {* signInEmailAddress *}\u000A            {* currentPassword *}\u000A            \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A                \u003Cdiv class\u003D\u0022capture_left\u0022\u003E\u000A                    {* backButton *}\u000A                \u003C/div\u003E\u000A                \u003Cdiv class\u003D\u0022capture_right\u0022\u003E\u000A                    \u003Cbutton class\u003D\u0022capture_secondary capture_btn capture_primary\u0022 type\u003D\u0022submit\u0022\u003E\u003Cspan class\u003D\u0022janrain\u002Dicon\u002D16 janrain\u002Dicon\u002Dkey\u0022\u003E\u003C/span\u003E Sign In\u003C/button\u003E\u000A                \u003C/div\u003E\u000A            \u003C/div\u003E\u000A         {* /signInForm *}\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u000A\u000A\u000A\u003C!\u002D\u002D\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A    EMAIL VERIFICATION SCREENS:\u000A    The following screens are part of the email verification user workflow.\u000A    For a complete out\u002Dof\u002Dthe\u002Dbox email verification experience, these\u000A    screens must be included on page where you are implementing email\u000A    verification.\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A\u002D\u002D\u003E\u000A\u000A\u003C!\u002D\u002D verifyEmail:\u000A    This is the landing screen after a user clicks on the link in the\u000A    verification email sent to the user when they\u0027ve registered with a\u000A    non\u002Dverified email address.\u000A\u000A    HOW IT WORKS: The code that is generated by Capture and included in the\u000A    link sent in the verification email is sent to the server and, if valid,\u000A    the user\u0027s email will be marked as valid and the verifyEmailSuccess\u000A    screen will be rendered. If the code is not accepted for any reason,\u000A    the verifyEmail screen is shown and the user has another opportunity\u000A    to have the verification email sent to them.\u000A\u000A    NOTE: The links generated in the emails sent to users are based on\u000A    Capture settings found in Janrain\u0027s Capture Dashboard. In addition to\u000A    entering the URL of your email verification page, you will need to add\u000A    \u0027screenToRender\u0027 as a parameter in the URL with a value of \u0027verifyEmail\u0027\u000A    which is this screen.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022verifyEmail\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EResend Email Verification\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cp\u003ESorry we could not verify that email address. Enter your email below and we\u0027ll send you another email.\u003C/p\u003E\u000A    {* #resendVerificationForm *}\u000A        {* signInEmailAddress *}\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            \u003Cinput value\u003D\u0022Submit\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A        \u003C/div\u003E\u000A     {* /resendVerificationForm *}\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D resendVerificationSuccess:\u000A    This screen is rendered when a user enters an email address from the\u000A    verifyEmail screen.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022resendVerificationSuccess\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EYour Verification Email Has Been Sent\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cdiv class\u003D\u0022hr\u0022\u003E\u003C/div\u003E\u000A    \u003Cp\u003EPlease check your email and click on the link to complete your registration.\u003C/p\u003E\u000A    \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A        \u003Ca href\u003D\u0022#\u0022 onclick\u003D\u0022janrain.capture.ui.modal.close()\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003EClose\u003C/a\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D verifyEmailSuccess:\u000A    This screen is rendered if the verification code provided in the link\u000A    sent to the user in the verification email is accepted and the user\u0027s\u000A    email address has been verified.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022verifyEmailSuccess\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003ESuccess\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cp\u003EThank you for verifying your email address.\u003C/p\u003E\u000A    \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A        \u003Ca style\u003D\u0022display: none\u003B\u0022 href\u003D\u0022/?screenToRender\u003DsignIn\u0022 class\u003D\u0022capture_btn capture_primary signed\u002Dout\u002Dutils\u0022\u003ESign in\u003C/a\u003E\u000A        \u003Ca href\u003D\u0022#\u0022 onclick\u003D\u0022janrain.capture.ui.modal.close()\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003EClose\u003C/a\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u000A\u000A\u000A\u003C!\u002D\u002D\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A    RESET PASSWORD SCREENS:\u000A    The following screens are part of the password reset user workflow.\u000A    For a complete out\u002Dof\u002Dthe\u002Dbox password reset experience, these screens\u000A    must be included on the page where you are implementing password reset\u000A    functionality.\u000A\u000A    NOTE: The order in which these screens are rendered is as follows:\u000A    resetPasswordRequestCode\u000A    resetPasswordRequestCodeSuccess\u000A    resetPassword\u000A    resetPasswordSuccess\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A\u002D\u002D\u003E\u000A\u000A\u003C!\u002D\u002D resetPassword:\u000A    This screen is rendered when the user clicks the link in provided in the\u000A    password reset email and the code in the link is valid.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022resetPassword\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EChange password\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    {* #changePasswordFormNoAuth *}\u000A        {* newPassword *}\u000A        {* newPasswordConfirm *}\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            \u003Cinput value\u003D\u0022Submit\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A        \u003C/div\u003E\u000A    {* /changePasswordFormNoAuth *}\u000A\u003C/div\u003E\u000A\u003C!\u002D\u002D resetPasswordSuccess:\u000A    This screen is rendered when the user successfully changes their\u000A    password from the resetPassword screen.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022resetPasswordSuccess\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EYour password has been changed\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cp\u003EPassword has been successfully updated.\u003C/p\u003E\u000A    \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A        \u003Ca href\u003D\u0022/?screenToRender\u003DsignIn\u0022 class\u003D\u0022capture_btn capture_primary signed\u002Dout\u002Dutils\u0022\u003ESign in\u003C/a\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u003C!\u002D\u002D resetPasswordRequestCode:\u000A    This is the landing screen for the password reset workflow. When the\u000A    user clicks the link provided in the reset password email, a code is\u000A    supplied and is passed to Capture for verification. If the code is valid\u000A    the resetPassword screen is rendered immediately and the content of\u000A    this screen is not presented. If the code is not accepted for any reason\u000A    this screen is then presented, allowing the user to re\u002Denter their\u000A    email address.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022resetPasswordRequestCode\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EPlease enter your email address and create a new password\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cp\u003EWe didn\u0027t recognize that password reset code. Enter your email address to get a new one.\u003C/p\u003E\u000A    {* #resetPasswordForm *}\u000A        {* signInEmailAddress *}\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            \u003Cinput value\u003D\u0022Send\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A        \u003C/div\u003E\u000A    {* /resetPasswordForm *}\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D resetPasswordRequestCodeSuccess:\u000A    This screen is rendered if the user submitted an email address on the\u000A    resetPasswordRequestCode screen.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022resetPasswordRequestCodeSuccess\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EReset Password\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A        \u003Cp\u003EWe\u0027ve sent an email with instructions to create a new password. Your existing password has not been changed yet.\u003C/p\u003E\u000A    \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A        \u003Ca href\u003D\u0022#\u0022 onclick\u003D\u0022janrain.capture.ui.modal.close()\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003EClose\u003C/a\u003E\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A\u000A\u000A\u000A\u000A\u003C!\u002D\u002D\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A    EDIT PROFILE SCREENS:\u000A    The following screens are part of the profile editing user workflow.\u000A    For a complete out\u002Dof\u002Dthe\u002Dbox profile editing experience, these screens\u000A    must be included on the page where you are implementing profile editing\u000A    functionality.\u000A\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u000A\u002D\u002D\u003E\u000A\u000A\u003C!\u002D\u002D editProfile\u000A    This screen is where the user can edit their profile data. It can be\u000A    rendered in whatever way works best for your implementation, be it\u000A    using the data\u002Dcapturescreen attribute, janrain.capture.ui.renderScreen\u000A    or passing in \u0027screenToRender\u0027 in the URL linking to the page where\u000A    you have implemented edit profile.\u000A\u002D\u002D\u003E\u000A\u003Cdiv id\u003D\u0022editProfile\u0022 style\u003D\u0022display:none\u003B\u0022 class\u003D\u0022profiles\u0022\u003E\u000A    \u003Ch1\u003EEdit Your Account\u003C/h1\u003E\u000A    \u003Cdiv class\u003D\u0022capture_grid_block\u0022\u003E\u000A\u000A        \u003Cfieldset class\u003D\u0022account\u002Dinfo\u0022\u003E\u000A            \u003Ch3\u003EAccount Info\u003C/h3\u003E\u000A                {* #editProfileForm *}\u000A                    {* firstName *}\u000A                    {* lastName *}\u000A                    {* displayName *}\u000A                    {* emailAddress *}\u000A                    {* addressPostalCode *}\u000A                    {* cds_accountNumber *}\u000A                    \u003Cfieldset class\u003D\u0022capture_form_item\u0022\u003E\u000A                        \u003Cinput value\u003D\u0022Save Account Info\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A                        {* savedProfileMessage *}\u000A                    \u003C/fieldset\u003E\u000A                {* /editProfileForm *}\u000A        \u003C/fieldset\u003E\u000A    \u003C/div\u003E\u000A\u000A    \u003Cfieldset class\u003D\u0022profiles\u002Dform janrain\u002Dcapture\u002Dui cds\u002Dinfo\u0022 style\u003D\u0022display:none\u003B\u0022\u003E\u000A        \u003Ch2\u003EPrint Subscribers\u003C/h2\u003E\u000A        \u003Cp class\u003D\u0022loading\u0022\u003ELoading...\u003C/p\u003E\u000A    \u003C/fieldset\u003E\u000A\u000A    \u003Cfieldset id\u003D\u0022mailchimp\u002Dsubscriptions\u0022\u003E\u000A        \u003Cdiv class\u003D\u0022messages\u0022\u003E\u003C/div\u003E\u000A    \u003C/fieldset\u003E\u000A\u000A    \u003Cfieldset class\u003D\u0022linked\u002Daccounts\u0022\u003E\u000A        \u003Ch3\u003ELinked Accounts\u003C/h3\u003E\u000A        {* linkedAccounts *}\u000A        {* #linkAccountContainer *}\u000A            \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A                \u003Ch1\u003ELink your accounts\u003C/h1\u003E\u000A            \u003C/div\u003E\u000A            \u003Ch2\u003EAllows you to sign in to your account using that provider in the future.\u003C/h2\u003E\u000A            \u003Cdiv class\u003D\u0022capture_signin\u0022\u003E\u000A                {* loginWidget *}\u000A            \u003C/div\u003E\u000A        {* /linkAccountContainer *}\u000A\u000A        \u003C!\u002D\u002D Only show this if it was from a traditional login !\u002D\u002D\u003E\u000A        \u003Ch3 class\u003D\u0022janrain_traditional_account_only\u0022\u003EPassword\u003C/h3\u003E\u000A        \u003Cdiv class\u003D\u0022janrain_traditional_account_only contentBoxWhiteShadow\u0022\u003E\u000A            \u003Ca href\u003D\u0022#\u0022 data\u002Dcapturescreen\u003D\u0022changePassword\u0022\u003EChange Password\u003C/a\u003E\u000A        \u003C/div\u003E\u000A    \u003C/fieldset\u003E\u000A\u000A    \u003Cfieldset id\u003D\u0022deactive\u002Daccount\u0022\u003E\u000A        \u003Ch3\u003EDeactivate\u003C/h3\u003E\u000A        \u003Cdiv class\u003D\u0022capture_deactivate_section contentBoxWhiteShadow clearfix\u0022\u003E\u000A            \u003Ca href\u003D\u0022#\u0022 data\u002Dcapturescreen\u003D\u0022confirmAccountDeactivation\u0022\u003EPermanently Deactivate Account\u003C/a\u003E\u000A        \u003C/div\u003E\u000A    \u003C/fieldset\u003E\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D changePassword:\u000A    This screen is rendered when the user clicks the \u0027Change Password\u0027 link\u000A    on the edit profile page. After the user enters their new password,\u000A    the edit profile screen is refreshed and displayed.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022changePassword\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EChange password\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    {* #changePasswordForm *}\u000A        {* currentPassword *}\u000A        {* newPassword *}\u000A        {* newPasswordConfirm *}\u000A        \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A            \u003Cinput value\u003D\u0022Save\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A        \u003C/div\u003E\u000A    {* /changePasswordForm *}\u000A\u003C/div\u003E\u000A\u000A\u003C!\u002D\u002D confirmAccountDeactivation:\u000A    If the user clicks the \u0027Deactivate Account\u0027 link on the edit profile\u000A    page, this screen is rendered. From here, the user can deactivate their\u000A    account.\u000A\u002D\u002D\u003E\u000A\u003Cdiv style\u003D\u0022display:none\u003B\u0022 id\u003D\u0022confirmAccountDeactivation\u0022\u003E\u000A    \u003Cdiv class\u003D\u0022capture_header\u0022\u003E\u000A        \u003Ch1\u003EDeactivate your Account\u003C/h1\u003E\u000A    \u003C/div\u003E\u000A    \u003Cdiv class\u003D\u0022content_wrapper\u0022\u003E\u000A        \u003Cp\u003EAre you sure you want to deactivate your account? You will no longer have access to your profile.\u003C/p\u003E\u000A        {* deactivateAccountForm *}\u000A                \u003Cdiv class\u003D\u0022capture_footer\u0022\u003E\u000A                    \u003Cinput value\u003D\u0022Yes\u0022 type\u003D\u0022submit\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003E\u000A                    \u003Ca href\u003D\u0022#\u0022 id\u003D\u0022capture_confirmAccountDeactivation_noButton\u0022 onclick\u003D\u0022janrain.capture.ui.modal.close()\u0022 class\u003D\u0022capture_btn capture_primary\u0022\u003ENo\u003C/a\u003E\u000A                \u003C/div\u003E\u000A            \u003C/div\u003E\u000A        {* /deactivateAccountForm *}\u000A    \u003C/div\u003E\u000A\u003C/div\u003E\u000A";

// IE 8 and 9 use a XDomainRequest object instead of XMLHttpRequest,
// which doesn't support cross domain requests from http to https.
// In this case, replace all the endpoints with non-SSL versions.
(function(){
    var url;
    // The same feature detection test that our jquery IE CORS plugin uses.
    // It should hit IE 8-9.
    if (!(window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()) && window.location.protocol === "http:") {
        for (var key in Atlantic.Janrain.Urls) {
            url = Atlantic.Janrain.Urls[key];
            if (url.indexOf("https://") === 0) {
                url = "http://" + url.slice(7);
                Atlantic.Janrain.Urls[key] = url;
            }
        }
    }
})();

if (typeof window.janrain !== 'object') window.janrain = {};
if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};
if (typeof window.janrain.settings.capture !== 'object') window.janrain.settings.capture = {};

janrain.settings.appUrl = 'https://login.theatlantic.com';
janrain.settings.capture.appId = 'vuwe76jqbj2cu68j5tscarzpgv';
janrain.settings.capture.captureServer = 'https://theatlantic.us.janraincapture.com';
janrain.settings.capture.clientId = 'vtjybuef4rz7d7zpj7dhjzw58nv9rhgu';
janrain.settings.actionText = ' ';
janrain.settings.borderColor = '#ffffff';
janrain.settings.capture.accessTokenLifeHours = 24;
janrain.settings.capture.cookieDomain = '.theatlantic.com';
janrain.settings.capture.flowName = 'standard';
janrain.settings.capture.flowVersion = 'HEAD';
janrain.settings.capture.keepProfileCookieAfterLogout = false;
janrain.settings.capture.modalCloseHtml = 'X';
janrain.settings.capture.noModalBorderInlineCss = true;
janrain.settings.capture.noStyling = true;
janrain.settings.capture.redirectUri = 'http://www.theatlantic.com/profiles/';
janrain.settings.capture.registerFlow = 'socialRegistration';
janrain.settings.capture.responseType = 'token';
janrain.settings.capture.returnExperienceUserData = [ "uuid", "displayName", "givenName" ];
janrain.settings.capture.setProfileCookie = true;
janrain.settings.capture.socialRegistrationCompleteRedirect  = 'http://www.theatlantic.com/profiles/?screenToRender=editProfile';
janrain.settings.capture.stylesheets = [];
janrain.settings.fontFamily = '"Helvetica", "Arial", "Lucida Grande", "Verdana", sans-serif';
janrain.settings.language = 'en-US';
janrain.settings.linkClass = 'janrainEngage';
janrain.settings.packages = ['login', 'capture'];
janrain.settings.showAttribution = false;
janrain.settings.tokenAction = 'event';
janrain.settings.width = 300;


(function (){
    // Injector code
    janrain.ready = true;

    var injector = document.createElement('script');
    injector.type = 'text/javascript';
    injector.id = 'janrainAuthWidget';
    if (document.location.protocol === 'https:') {
        injector.src = Atlantic.Janrain.Urls.httpsLoad;
    } else {
        injector.src = Atlantic.Janrain.Urls.httpLoad;
    }
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(injector, firstScript);
})();


/**
 * Proxy API calls through a method that tells us whether or not the API is
 * down.
 */
Atlantic.Janrain.profilesServerAlive = null;

// Are magazine pages ready?
Atlantic.Janrain.enableCDSSubscriptions = false;

Atlantic.Janrain.callApi = function () {
    var jqXHR;
    if (Atlantic.Janrain.profilesServerAlive === null) {
        Atlantic.Janrain.profilesServerAlive = false;
        jqXHR = $.ajax(Atlantic.Janrain.Urls.ping, {
            async: false,
            success: function () { Atlantic.Janrain.profilesServerAlive = true; }
        });

        if (Atlantic.Janrain.profilesServerAlive === false) {
            $("#nav-login").trigger("api:down");
        }
    }

    if (Atlantic.Janrain.profilesServerAlive) {
        jqXHR = $.ajax.apply(null, arguments);
    }
    return jqXHR;
};

Atlantic.Janrain.trackEvent = function(action, value) {
    _gaq.push(['_trackEvent', 'Registration', action, value || 0]);
};

Atlantic.CDS.formatServiceLink = function(accountNumber) {
    return "https://w1.buysub.com/servlet/RemoteLoginGateway?cds_mag_code=ATL" +
        "&cds_page_id=171571&cds_query_type=A&cds_login_type=S" +
        "&cds_jump_page_id=171730&cds_account_number=" + accountNumber +
        "&cds_return_url=https://w1.buysub.com/servlet/CSGateway?cds_mag_code=ATL";
};

Atlantic.Janrain.methods = {
    setNavigationForLoggedInUser: function(result) {
        // Check for magazine redirect
        if (Atlantic.Utils.readCookie('MagazineRedirect') === 'true') {
            window.location.assign('/profiles/magazine/');
        }

        janrain.capture.ui.modal.close();

        var displayName = janrain.capture.ui.getReturnExperienceData("displayName");
        var givenName = janrain.capture.ui.getReturnExperienceData("givenName");

        // Set the edit profile link to the user's name.
        // Assuming we have both the given and display name, prefer the shortest.
        var name = (givenName && givenName.length <= displayName.length) ? givenName : displayName;
        $("#nav-login .captureProfileLink").text(name + "'s Account");

        $(".signed-out-utils").hide();
        $(".signed-in-utils").show();
    },

    setNavigationForLoggedOutUser: function(result) {
        Atlantic.Janrain.methods.clearSavedData();
        $(".signed-out-utils").show();
        $(".signed-in-utils").hide();
    },

    // Clear any saved personal information
    clearSavedData: function (){
        localStorage.janrainCaptureProfileData = "";
        localStorage.janrainCaptureReturnExperienceData = "";
    },

    getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    /**
     * Get the screen from the url parameter
     * or anything explicitly set in javascript.
     */
    getScreen: function() {
        return this.getParameterByName('screenToRender') || Atlantic.Janrain.screen;
    },

    enhanceReturnExperience: function(result) {
        if (result.screen == "returnTraditional") {
            var span = document.getElementById('traditionalWelcomeName');
            var name = janrain.capture.ui.getReturnExperienceData("displayName");
            if (span && name) {
                span.innerHTML = "Welcome back, " + name + "!";
            }
        }
    },

    enhanceEditProfile: function(result) {
        // All terms and conditions should open in new windows.
        $("a[href='http://www.theatlantic.com/terms-and-conditions/']").attr("target", "_blank");
    },

    hideResendLink: function(result) {
        // Hide the 'Resend confirmation email' link if it's been clicked
        // from the edit profile page. Link will reappear if the user
        // refreshes their profile page.
        if(result.controlName == "resendVerificationEmail" &&
           result.screen == "editProfile") {
            $("#capture_editProfile_resendLink").hide();
        }
    },

    handleDeactivatedAccountLogin: function(result) {
        if (result.statusMessage == "accountDeactivated") {
            janrain.capture.ui.renderScreen('accountDeactivated');
        }
    },

    handleAccountDeactivation: function(result) {
        if(result.status == "success") {
            $("#editProfile").hide();
            janrain.capture.ui.modal.close();
            janrain.capture.ui.endCaptureSession();
            janrain.capture.ui.renderScreen('accountDeactivated');
        }
    },

    handleModalReady: function(result) {
        // The sign in screen needs to wait to be triggered until after
        // the page is ready
        if (Atlantic.Janrain.methods.getScreen() == 'signIn') {
            janrain.capture.ui.renderScreen('signIn');
        }

        if (Atlantic.Janrain.methods.getScreen() === "verifyEmail") {
            var is_authenticated = janrain.capture.ui.getReturnExperienceData("displayName") !== undefined;
            if (!is_authenticated){
                $("#janrainModal .capture_footer > a").toggle();
            }
        }
    },

    onEmailVerificationSuccess: function(result) {
        // Attempt to link a magazine subscription account if one exists
        Atlantic.Janrain.callApi({
            type: "POST",
            url: Atlantic.Janrain.Urls.magazineVerify,
            data: {uuid: janrain.capture.ui.getReturnExperienceData("uuid")},
            async: false
        });
        Atlantic.Janrain.methods.setNavigationForLoggedInUser();
    },

    onCaptureAccessDenied: function() {
        Atlantic.Janrain.methods.clearSavedData();
    },

    handleLinkAccountError: function(data){
        var $modalHeader = $("#janrainModal:visible .capture_header");
        if ($modalHeader.is(":visible") && data.message) {

            // Prevent duplicate errors from popping up.
            // If we're already added one, remove it and pop
            // in the new error.
            if ($modalHeader.next().hasClass("capture_fatal_error")) {
                $modalHeader.next().remove();
            }

            var $msg = $("<span />").addClass("capture_fatal_error").text(data.message);
            $modalHeader.after($msg);
        }
    },

    ensureModalVisible: function() {
        var modalTop = $("#janrainModal").offset().top;
        if (modalTop < window.pageYOffset) {
            window.scroll(window.pageXOffset, modalTop);
        }
    }

};

Atlantic.Janrain.callbacks = Atlantic.Janrain.callbacks || [];
Atlantic.Janrain.callbacks.push(function() {
    janrain.events.onCaptureAccessDenied.addHandler(Atlantic.Janrain.methods.onCaptureAccessDenied);
    janrain.events.onCaptureAccountDeactivateSuccess.addHandler(Atlantic.Janrain.methods.handleAccountDeactivation);
    janrain.events.onCaptureEmailVerificationSuccess.addHandler(Atlantic.Janrain.methods.onEmailVerificationSuccess);
    janrain.events.onCaptureLoginFailed.addHandler(Atlantic.Janrain.methods.handleDeactivatedAccountLogin);
    janrain.events.onCaptureLoginSuccess.addHandler(Atlantic.Janrain.methods.setNavigationForLoggedInUser);
    janrain.events.onCaptureModalReady.addHandler(Atlantic.Janrain.methods.handleModalReady);
    janrain.events.onCaptureRegistrationSuccess.addHandler(Atlantic.Janrain.methods.setNavigationForLoggedInUser);
    janrain.events.onCaptureSaveSuccess.addHandler(Atlantic.Janrain.methods.hideResendLink);
    janrain.events.onCaptureScreenShow.addHandler(Atlantic.Janrain.methods.enhanceEditProfile);
    janrain.events.onCaptureScreenShow.addHandler(Atlantic.Janrain.methods.enhanceReturnExperience);
    janrain.events.onCaptureSessionEnded.addHandler(Atlantic.Janrain.methods.setNavigationForLoggedOutUser);
    janrain.events.onCaptureSessionFound.addHandler(Atlantic.Janrain.methods.setNavigationForLoggedInUser);
    janrain.events.onCaptureLinkAccountError.addHandler(Atlantic.Janrain.methods.handleLinkAccountError);
    janrain.events.onModalOpen.addHandler(Atlantic.Janrain.methods.ensureModalVisible);
});


Atlantic.Janrain.setupTracking = function(){
    Atlantic.Janrain._registeringWith = null;

    $(document).on("click", "#capture_signIn_createAccountButton", function(){
        Atlantic.Janrain._registeringWith = "traditional";
        Atlantic.Janrain.trackEvent("start-registering", Atlantic.Janrain._registeringWith);
    });

    $(document).on("click", "#janrainProviderPages .providers li", function(e){
        Atlantic.Janrain._registeringWith = this.id.replace("janrain-","");
        Atlantic.Janrain.trackEvent("start-registering", Atlantic.Janrain._registeringWith);
    });

    Atlantic.Janrain.callbacks.push(function(){

        janrain.events.onCapturePostLoginScreen.addHandler(function(transaction) {
            Atlantic.Janrain.trackEvent("request-more-info", Atlantic.Janrain._registeringWith);
        });

        janrain.events.onCaptureRegistrationSuccess.addHandler(function(){
            Atlantic.Janrain.trackEvent("registered", Atlantic.Janrain._registeringWith);
        });

        janrain.events.onCaptureEmailSent.addHandler(function(){
            Atlantic.Janrain.trackEvent("email-sent", Atlantic.Janrain._registeringWith);
        });

        janrain.events.onCaptureEmailVerificationSuccess.addHandler(function(){
            Atlantic.Janrain.trackEvent("email-verified", Atlantic.Janrain._registeringWith);
        });

    });

};


function janrainCaptureWidgetOnLoad() {

    // Load up the Janrain screen templates if they're not already on the page
    if ($("#janrain-screens:empty")) {
        $('#janrain-screens').html(Atlantic.Janrain.templateHtml);
    }

    // Show Janrain specific items
    $(".janrain-utils").show();

    // Call render-screen on anything with a data-screen-to-render attribute
    $('[data-screen-to-render]').on('click', function(){
        janrain.capture.ui.renderScreen($(this).data('screen-to-render'));
    });

    // Setup sign out link
    $('.captureSignOutLink').on('click', function(){
        janrain.capture.ui.endCaptureSession();
    });

    janrain.settings.capture.screenToRender = Atlantic.Janrain.methods.getScreen();

    // The callbacks should be a list of functions.
    // The moment before the queue executes, replace the push method.
    // Anything that is added to the queue after this function is called
    // should be executed immediately.
    Atlantic.Janrain.callbacks.push = function(callback) {
        callback();
    };
    for (var i = 0; i < Atlantic.Janrain.callbacks.length; i++) {
        Atlantic.Janrain.callbacks[i]();
    }

    Atlantic.Janrain.setupTracking();

    janrain.capture.ui.start();
}
