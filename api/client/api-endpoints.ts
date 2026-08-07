export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REGISTER: "/auth/register",
    /** Same resource as `PROFILE.MY_PROFILE` — kept for existing `auth.api` / `getMe`. */
    ME: "/user-profile/my-profile",
    EMAIL_CONFIRMATION: "/auth/email-confirmation",
    PASSWORD_RECOVERY: {
      RESET: "/auth/password-recovery/reset",
      NEW_PASSWORD: (token: string) => `/auth/password-recovery/new-password/${token}`,
    },
  },
  /** User profile module — mirrors `auth` grouping (`api/services/profile.api.ts` + `services/profile.ts`). */
  PROFILE: {
    MY_PROFILE: "/user-profile/my-profile",
    CREATE_CUSTOMER: "/user-profile/create-customer",
    UPDATE_CUSTOMER: "/user-profile/update-customer",
    CREATE_MASTER: "/user-profile/create-master",
    UPDATE_MASTER: "/user-profile/update-master",
    UPDATE_IMAGE: "/user-profile/update-image",
    CREATE_PORTFOLIO_POST: "/user-profile/portfolio/create-post"
  },
  COURSE:{
    CREATE_LECTION:"/lections/create",
    CHECK_ANSWERS:'/tests/check-test',
    GET_CATEGORYS:'/lections/category-lections',
    GET_LECTION:'/lections/find-lection',
    GET_LECTIONS_CATEGORY:'/lections/lection-for-category',
    GET_TEST:'/tests/find-test',
    GET_RESULT_TEST:'/tests/find-result-test'
  }
} as const
