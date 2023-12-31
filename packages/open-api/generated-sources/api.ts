/* tslint:disable */
/* eslint-disable */
/**
 * Proffy
 * An schedule app
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AuthUserDTO
 */
export interface AuthUserDTO {
    /**
     * User email
     * @type {string}
     * @memberof AuthUserDTO
     */
    'email': string;
    /**
     * User password
     * @type {string}
     * @memberof AuthUserDTO
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface ClassOwner
 */
export interface ClassOwner {
    /**
     * 
     * @type {string}
     * @memberof ClassOwner
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ClassOwner
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof ClassOwner
     */
    'passwordHash': string;
    /**
     * 
     * @type {string}
     * @memberof ClassOwner
     */
    'avatarUrl': string;
    /**
     * 
     * @type {string}
     * @memberof ClassOwner
     */
    'whatsapp': string;
    /**
     * 
     * @type {string}
     * @memberof ClassOwner
     */
    'bio': string;
}
/**
 * 
 * @export
 * @interface CreateClassDto
 */
export interface CreateClassDto {
    /**
     * 
     * @type {string}
     * @memberof CreateClassDto
     */
    'subject': string;
    /**
     * 
     * @type {number}
     * @memberof CreateClassDto
     */
    'cost': number;
    /**
     * 
     * @type {number}
     * @memberof CreateClassDto
     */
    'ownerId': number;
}
/**
 * 
 * @export
 * @interface CreateUserDTO
 */
export interface CreateUserDTO {
    /**
     * Username
     * @type {string}
     * @memberof CreateUserDTO
     */
    'name': string;
    /**
     * User email
     * @type {string}
     * @memberof CreateUserDTO
     */
    'email': string;
    /**
     * User password
     * @type {string}
     * @memberof CreateUserDTO
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface GetClassDto
 */
export interface GetClassDto {
    /**
     * 
     * @type {number}
     * @memberof GetClassDto
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof GetClassDto
     */
    'subject': string;
    /**
     * 
     * @type {number}
     * @memberof GetClassDto
     */
    'cost': number;
    /**
     * 
     * @type {number}
     * @memberof GetClassDto
     */
    'ownerId': number;
    /**
     * 
     * @type {string}
     * @memberof GetClassDto
     */
    'createdAt': string;
    /**
     * 
     * @type {ClassOwner}
     * @memberof GetClassDto
     */
    'owner': ClassOwner;
}
/**
 * 
 * @export
 * @interface GetManyClassDto
 */
export interface GetManyClassDto {
    /**
     * 
     * @type {Array<GetClassDto>}
     * @memberof GetManyClassDto
     */
    'classes': Array<GetClassDto>;
}
/**
 * 
 * @export
 * @interface UpdateClassDto
 */
export interface UpdateClassDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateClassDto
     */
    'subject'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateClassDto
     */
    'cost'?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateClassDto
     */
    'ownerId'?: number;
}

/**
 * ClassApi - axios parameter creator
 * @export
 */
export const ClassApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateClassDto} createClassDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerCreate: async (createClassDto: CreateClassDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createClassDto' is not null or undefined
            assertParamExists('classControllerCreate', 'createClassDto', createClassDto)
            const localVarPath = `/api/class`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createClassDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [subject] 
         * @param {number} [cost] 
         * @param {number} [weekDay] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerFind: async (subject?: string, cost?: number, weekDay?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/class`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (subject !== undefined) {
                localVarQueryParameter['subject'] = subject;
            }

            if (cost !== undefined) {
                localVarQueryParameter['cost'] = cost;
            }

            if (weekDay !== undefined) {
                localVarQueryParameter['weekDay'] = weekDay;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerFindOne: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('classControllerFindOne', 'id', id)
            const localVarPath = `/api/class/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateClassDto} updateClassDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerUpdate: async (id: number, updateClassDto: UpdateClassDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('classControllerUpdate', 'id', id)
            // verify required parameter 'updateClassDto' is not null or undefined
            assertParamExists('classControllerUpdate', 'updateClassDto', updateClassDto)
            const localVarPath = `/api/class/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateClassDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClassApi - functional programming interface
 * @export
 */
export const ClassApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClassApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateClassDto} createClassDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async classControllerCreate(createClassDto: CreateClassDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.classControllerCreate(createClassDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [subject] 
         * @param {number} [cost] 
         * @param {number} [weekDay] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async classControllerFind(subject?: string, cost?: number, weekDay?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetManyClassDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.classControllerFind(subject, cost, weekDay, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async classControllerFindOne(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.classControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateClassDto} updateClassDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async classControllerUpdate(id: number, updateClassDto: UpdateClassDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.classControllerUpdate(id, updateClassDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ClassApi - factory interface
 * @export
 */
export const ClassApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClassApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateClassDto} createClassDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerCreate(createClassDto: CreateClassDto, options?: any): AxiosPromise<void> {
            return localVarFp.classControllerCreate(createClassDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [subject] 
         * @param {number} [cost] 
         * @param {number} [weekDay] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerFind(subject?: string, cost?: number, weekDay?: number, options?: any): AxiosPromise<GetManyClassDto> {
            return localVarFp.classControllerFind(subject, cost, weekDay, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerFindOne(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.classControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateClassDto} updateClassDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classControllerUpdate(id: number, updateClassDto: UpdateClassDto, options?: any): AxiosPromise<void> {
            return localVarFp.classControllerUpdate(id, updateClassDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClassApi - interface
 * @export
 * @interface ClassApi
 */
export interface ClassApiInterface {
    /**
     * 
     * @param {CreateClassDto} createClassDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApiInterface
     */
    classControllerCreate(createClassDto: CreateClassDto, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} [subject] 
     * @param {number} [cost] 
     * @param {number} [weekDay] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApiInterface
     */
    classControllerFind(subject?: string, cost?: number, weekDay?: number, options?: AxiosRequestConfig): AxiosPromise<GetManyClassDto>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApiInterface
     */
    classControllerFindOne(id: number, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} id 
     * @param {UpdateClassDto} updateClassDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApiInterface
     */
    classControllerUpdate(id: number, updateClassDto: UpdateClassDto, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * ClassApi - object-oriented interface
 * @export
 * @class ClassApi
 * @extends {BaseAPI}
 */
export class ClassApi extends BaseAPI implements ClassApiInterface {
    /**
     * 
     * @param {CreateClassDto} createClassDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApi
     */
    public classControllerCreate(createClassDto: CreateClassDto, options?: AxiosRequestConfig) {
        return ClassApiFp(this.configuration).classControllerCreate(createClassDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [subject] 
     * @param {number} [cost] 
     * @param {number} [weekDay] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApi
     */
    public classControllerFind(subject?: string, cost?: number, weekDay?: number, options?: AxiosRequestConfig) {
        return ClassApiFp(this.configuration).classControllerFind(subject, cost, weekDay, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApi
     */
    public classControllerFindOne(id: number, options?: AxiosRequestConfig) {
        return ClassApiFp(this.configuration).classControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {UpdateClassDto} updateClassDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClassApi
     */
    public classControllerUpdate(id: number, updateClassDto: UpdateClassDto, options?: AxiosRequestConfig) {
        return ClassApiFp(this.configuration).classControllerUpdate(id, updateClassDto, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerListUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {AuthUserDTO} authUserDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignIn: async (authUserDTO: AuthUserDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authUserDTO' is not null or undefined
            assertParamExists('authControllerSignIn', 'authUserDTO', authUserDTO)
            const localVarPath = `/api/auth`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authUserDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateUserDTO} createUserDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerCreate: async (createUserDTO: CreateUserDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserDTO' is not null or undefined
            assertParamExists('userControllerCreate', 'createUserDTO', createUserDTO)
            const localVarPath = `/api/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetData(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetData(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerListUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerListUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {AuthUserDTO} authUserDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerSignIn(authUserDTO: AuthUserDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerSignIn(authUserDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateUserDTO} createUserDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerCreate(createUserDTO: CreateUserDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerCreate(createUserDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetData(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerListUsers(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerListUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AuthUserDTO} authUserDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignIn(authUserDTO: AuthUserDTO, options?: any): AxiosPromise<void> {
            return localVarFp.authControllerSignIn(authUserDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateUserDTO} createUserDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerCreate(createUserDTO: CreateUserDTO, options?: any): AxiosPromise<void> {
            return localVarFp.userControllerCreate(createUserDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    appControllerGetData(options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    appControllerListUsers(options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {AuthUserDTO} authUserDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    authControllerSignIn(authUserDTO: AuthUserDTO, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {CreateUserDTO} createUserDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    userControllerCreate(createUserDTO: CreateUserDTO, options?: AxiosRequestConfig): AxiosPromise<void>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetData(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetData(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerListUsers(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerListUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AuthUserDTO} authUserDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authControllerSignIn(authUserDTO: AuthUserDTO, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).authControllerSignIn(authUserDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateUserDTO} createUserDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public userControllerCreate(createUserDTO: CreateUserDTO, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).userControllerCreate(createUserDTO, options).then((request) => request(this.axios, this.basePath));
    }
}



