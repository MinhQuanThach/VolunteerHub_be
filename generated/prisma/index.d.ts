
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Event_registrations
 * 
 */
export type Event_registrations = $Result.DefaultSelection<Prisma.$Event_registrationsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Post_media
 * 
 */
export type Post_media = $Result.DefaultSelection<Prisma.$Post_mediaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  VOLUNTEER: 'VOLUNTEER',
  EVENT_MANAGER: 'EVENT_MANAGER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  LOCKED: 'LOCKED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const EventStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const RegistrationStatus: {
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  REGISTERED: 'REGISTERED'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]


export const NotificationType: {
  REGISTRATION: 'REGISTRATION',
  COMPLETION: 'COMPLETION',
  SYSTEM: 'SYSTEM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const PostMediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type PostMediaType = (typeof PostMediaType)[keyof typeof PostMediaType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type PostMediaType = $Enums.PostMediaType

export const PostMediaType: typeof $Enums.PostMediaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event_registrations`: Exposes CRUD operations for the **Event_registrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_registrations
    * const event_registrations = await prisma.event_registrations.findMany()
    * ```
    */
  get event_registrations(): Prisma.Event_registrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_media`: Exposes CRUD operations for the **Post_media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_medias
    * const post_medias = await prisma.post_media.findMany()
    * ```
    */
  get post_media(): Prisma.Post_mediaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Events: 'Events',
    Event_registrations: 'Event_registrations',
    Notifications: 'Notifications',
    Posts: 'Posts',
    Comments: 'Comments',
    Likes: 'Likes',
    Post_media: 'Post_media'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "events" | "event_registrations" | "notifications" | "posts" | "comments" | "likes" | "post_media"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Event_registrations: {
        payload: Prisma.$Event_registrationsPayload<ExtArgs>
        fields: Prisma.Event_registrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Event_registrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Event_registrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>
          }
          findFirst: {
            args: Prisma.Event_registrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Event_registrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>
          }
          findMany: {
            args: Prisma.Event_registrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>[]
          }
          create: {
            args: Prisma.Event_registrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>
          }
          createMany: {
            args: Prisma.Event_registrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Event_registrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>[]
          }
          delete: {
            args: Prisma.Event_registrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>
          }
          update: {
            args: Prisma.Event_registrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>
          }
          deleteMany: {
            args: Prisma.Event_registrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Event_registrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Event_registrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>[]
          }
          upsert: {
            args: Prisma.Event_registrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Event_registrationsPayload>
          }
          aggregate: {
            args: Prisma.Event_registrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_registrations>
          }
          groupBy: {
            args: Prisma.Event_registrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_registrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Event_registrationsCountArgs<ExtArgs>
            result: $Utils.Optional<Event_registrationsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Post_media: {
        payload: Prisma.$Post_mediaPayload<ExtArgs>
        fields: Prisma.Post_mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Post_mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Post_mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>
          }
          findFirst: {
            args: Prisma.Post_mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Post_mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>
          }
          findMany: {
            args: Prisma.Post_mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>[]
          }
          create: {
            args: Prisma.Post_mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>
          }
          createMany: {
            args: Prisma.Post_mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Post_mediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>[]
          }
          delete: {
            args: Prisma.Post_mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>
          }
          update: {
            args: Prisma.Post_mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>
          }
          deleteMany: {
            args: Prisma.Post_mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Post_mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Post_mediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>[]
          }
          upsert: {
            args: Prisma.Post_mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post_mediaPayload>
          }
          aggregate: {
            args: Prisma.Post_mediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_media>
          }
          groupBy: {
            args: Prisma.Post_mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_mediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Post_mediaCountArgs<ExtArgs>
            result: $Utils.Optional<Post_mediaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    events?: EventsOmit
    event_registrations?: Event_registrationsOmit
    notifications?: NotificationsOmit
    posts?: PostsOmit
    comments?: CommentsOmit
    likes?: LikesOmit
    post_media?: Post_mediaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    events_created: number
    events_approved: number
    registrations: number
    notifications: number
    posts: number
    comments: number
    likes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events_created?: boolean | UsersCountOutputTypeCountEvents_createdArgs
    events_approved?: boolean | UsersCountOutputTypeCountEvents_approvedArgs
    registrations?: boolean | UsersCountOutputTypeCountRegistrationsArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEvents_createdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEvents_approvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_registrationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    registrations: number
    notifications: number
    posts: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | EventsCountOutputTypeCountRegistrationsArgs
    notifications?: boolean | EventsCountOutputTypeCountNotificationsArgs
    posts?: boolean | EventsCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_registrationsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    comments: number
    likes: number
    media: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    media?: boolean | PostsCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Post_mediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: $Enums.UserStatus
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
    events_created?: boolean | Users$events_createdArgs<ExtArgs>
    events_approved?: boolean | Users$events_approvedArgs<ExtArgs>
    registrations?: boolean | Users$registrationsArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    posts?: boolean | Users$postsArgs<ExtArgs>
    comments?: boolean | Users$commentsArgs<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events_created?: boolean | Users$events_createdArgs<ExtArgs>
    events_approved?: boolean | Users$events_approvedArgs<ExtArgs>
    registrations?: boolean | Users$registrationsArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    posts?: boolean | Users$postsArgs<ExtArgs>
    comments?: boolean | Users$commentsArgs<ExtArgs>
    likes?: boolean | Users$likesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      events_created: Prisma.$EventsPayload<ExtArgs>[]
      events_approved: Prisma.$EventsPayload<ExtArgs>[]
      registrations: Prisma.$Event_registrationsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      posts: Prisma.$PostsPayload<ExtArgs>[]
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      status: $Enums.UserStatus
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events_created<T extends Users$events_createdArgs<ExtArgs> = {}>(args?: Subset<T, Users$events_createdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events_approved<T extends Users$events_approvedArgs<ExtArgs> = {}>(args?: Subset<T, Users$events_approvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends Users$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Users$postsArgs<ExtArgs> = {}>(args?: Subset<T, Users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Users$likesArgs<ExtArgs> = {}>(args?: Subset<T, Users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly status: FieldRef<"Users", 'UserStatus'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.events_created
   */
  export type Users$events_createdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Users.events_approved
   */
  export type Users$events_approvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Users.registrations
   */
  export type Users$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    where?: Event_registrationsWhereInput
    orderBy?: Event_registrationsOrderByWithRelationInput | Event_registrationsOrderByWithRelationInput[]
    cursor?: Event_registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_registrationsScalarFieldEnum | Event_registrationsScalarFieldEnum[]
  }

  /**
   * Users.notifications
   */
  export type Users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users.posts
   */
  export type Users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Users.comments
   */
  export type Users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.likes
   */
  export type Users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    max_participants: number | null
    created_by: number | null
    approved_by: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    max_participants: number | null
    created_by: number | null
    approved_by: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    max_participants: number | null
    created_by: number | null
    approved_by: number | null
    status: $Enums.EventStatus | null
    created_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    max_participants: number | null
    created_by: number | null
    approved_by: number | null
    status: $Enums.EventStatus | null
    created_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    location: number
    start_date: number
    end_date: number
    max_participants: number
    created_by: number
    approved_by: number
    status: number
    created_at: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    max_participants?: true
    created_by?: true
    approved_by?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    max_participants?: true
    created_by?: true
    approved_by?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    start_date?: true
    end_date?: true
    max_participants?: true
    created_by?: true
    approved_by?: true
    status?: true
    created_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    start_date?: true
    end_date?: true
    max_participants?: true
    created_by?: true
    approved_by?: true
    status?: true
    created_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    start_date?: true
    end_date?: true
    max_participants?: true
    created_by?: true
    approved_by?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    category: string | null
    location: string
    start_date: Date
    end_date: Date
    max_participants: number | null
    created_by: number | null
    approved_by: number | null
    status: $Enums.EventStatus
    created_at: Date
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    max_participants?: boolean
    created_by?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
    creator?: boolean | Events$creatorArgs<ExtArgs>
    approver?: boolean | Events$approverArgs<ExtArgs>
    registrations?: boolean | Events$registrationsArgs<ExtArgs>
    notifications?: boolean | Events$notificationsArgs<ExtArgs>
    posts?: boolean | Events$postsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    max_participants?: boolean
    created_by?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
    creator?: boolean | Events$creatorArgs<ExtArgs>
    approver?: boolean | Events$approverArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    max_participants?: boolean
    created_by?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
    creator?: boolean | Events$creatorArgs<ExtArgs>
    approver?: boolean | Events$approverArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    max_participants?: boolean
    created_by?: boolean
    approved_by?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "location" | "start_date" | "end_date" | "max_participants" | "created_by" | "approved_by" | "status" | "created_at", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Events$creatorArgs<ExtArgs>
    approver?: boolean | Events$approverArgs<ExtArgs>
    registrations?: boolean | Events$registrationsArgs<ExtArgs>
    notifications?: boolean | Events$notificationsArgs<ExtArgs>
    posts?: boolean | Events$postsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Events$creatorArgs<ExtArgs>
    approver?: boolean | Events$approverArgs<ExtArgs>
  }
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Events$creatorArgs<ExtArgs>
    approver?: boolean | Events$approverArgs<ExtArgs>
  }

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      creator: Prisma.$UsersPayload<ExtArgs> | null
      approver: Prisma.$UsersPayload<ExtArgs> | null
      registrations: Prisma.$Event_registrationsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      posts: Prisma.$PostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      category: string | null
      location: string
      start_date: Date
      end_date: Date
      max_participants: number | null
      created_by: number | null
      approved_by: number | null
      status: $Enums.EventStatus
      created_at: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends Events$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Events$creatorArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approver<T extends Events$approverArgs<ExtArgs> = {}>(args?: Subset<T, Events$approverArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Events$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Events$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Events$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Events$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Events$postsArgs<ExtArgs> = {}>(args?: Subset<T, Events$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'Int'>
    readonly title: FieldRef<"Events", 'String'>
    readonly description: FieldRef<"Events", 'String'>
    readonly category: FieldRef<"Events", 'String'>
    readonly location: FieldRef<"Events", 'String'>
    readonly start_date: FieldRef<"Events", 'DateTime'>
    readonly end_date: FieldRef<"Events", 'DateTime'>
    readonly max_participants: FieldRef<"Events", 'Int'>
    readonly created_by: FieldRef<"Events", 'Int'>
    readonly approved_by: FieldRef<"Events", 'Int'>
    readonly status: FieldRef<"Events", 'EventStatus'>
    readonly created_at: FieldRef<"Events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events.creator
   */
  export type Events$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Events.approver
   */
  export type Events$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Events.registrations
   */
  export type Events$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    where?: Event_registrationsWhereInput
    orderBy?: Event_registrationsOrderByWithRelationInput | Event_registrationsOrderByWithRelationInput[]
    cursor?: Event_registrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_registrationsScalarFieldEnum | Event_registrationsScalarFieldEnum[]
  }

  /**
   * Events.notifications
   */
  export type Events$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Events.posts
   */
  export type Events$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Model Event_registrations
   */

  export type AggregateEvent_registrations = {
    _count: Event_registrationsCountAggregateOutputType | null
    _avg: Event_registrationsAvgAggregateOutputType | null
    _sum: Event_registrationsSumAggregateOutputType | null
    _min: Event_registrationsMinAggregateOutputType | null
    _max: Event_registrationsMaxAggregateOutputType | null
  }

  export type Event_registrationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type Event_registrationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type Event_registrationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    status: $Enums.RegistrationStatus | null
    completed: boolean | null
    registered_at: Date | null
    canceled_at: Date | null
  }

  export type Event_registrationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    status: $Enums.RegistrationStatus | null
    completed: boolean | null
    registered_at: Date | null
    canceled_at: Date | null
  }

  export type Event_registrationsCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    status: number
    completed: number
    registered_at: number
    canceled_at: number
    _all: number
  }


  export type Event_registrationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type Event_registrationsSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type Event_registrationsMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    status?: true
    completed?: true
    registered_at?: true
    canceled_at?: true
  }

  export type Event_registrationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    status?: true
    completed?: true
    registered_at?: true
    canceled_at?: true
  }

  export type Event_registrationsCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    status?: true
    completed?: true
    registered_at?: true
    canceled_at?: true
    _all?: true
  }

  export type Event_registrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event_registrations to aggregate.
     */
    where?: Event_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_registrations to fetch.
     */
    orderBy?: Event_registrationsOrderByWithRelationInput | Event_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Event_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Event_registrations
    **/
    _count?: true | Event_registrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_registrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_registrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_registrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_registrationsMaxAggregateInputType
  }

  export type GetEvent_registrationsAggregateType<T extends Event_registrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_registrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_registrations[P]>
      : GetScalarType<T[P], AggregateEvent_registrations[P]>
  }




  export type Event_registrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Event_registrationsWhereInput
    orderBy?: Event_registrationsOrderByWithAggregationInput | Event_registrationsOrderByWithAggregationInput[]
    by: Event_registrationsScalarFieldEnum[] | Event_registrationsScalarFieldEnum
    having?: Event_registrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_registrationsCountAggregateInputType | true
    _avg?: Event_registrationsAvgAggregateInputType
    _sum?: Event_registrationsSumAggregateInputType
    _min?: Event_registrationsMinAggregateInputType
    _max?: Event_registrationsMaxAggregateInputType
  }

  export type Event_registrationsGroupByOutputType = {
    id: number
    user_id: number
    event_id: number
    status: $Enums.RegistrationStatus
    completed: boolean
    registered_at: Date
    canceled_at: Date | null
    _count: Event_registrationsCountAggregateOutputType | null
    _avg: Event_registrationsAvgAggregateOutputType | null
    _sum: Event_registrationsSumAggregateOutputType | null
    _min: Event_registrationsMinAggregateOutputType | null
    _max: Event_registrationsMaxAggregateOutputType | null
  }

  type GetEvent_registrationsGroupByPayload<T extends Event_registrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_registrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_registrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_registrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Event_registrationsGroupByOutputType[P]>
        }
      >
    >


  export type Event_registrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    completed?: boolean
    registered_at?: boolean
    canceled_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event_registrations"]>

  export type Event_registrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    completed?: boolean
    registered_at?: boolean
    canceled_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event_registrations"]>

  export type Event_registrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    completed?: boolean
    registered_at?: boolean
    canceled_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event_registrations"]>

  export type Event_registrationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    status?: boolean
    completed?: boolean
    registered_at?: boolean
    canceled_at?: boolean
  }

  export type Event_registrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "status" | "completed" | "registered_at" | "canceled_at", ExtArgs["result"]["event_registrations"]>
  export type Event_registrationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type Event_registrationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type Event_registrationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }

  export type $Event_registrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event_registrations"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      event: Prisma.$EventsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      event_id: number
      status: $Enums.RegistrationStatus
      completed: boolean
      registered_at: Date
      canceled_at: Date | null
    }, ExtArgs["result"]["event_registrations"]>
    composites: {}
  }

  type Event_registrationsGetPayload<S extends boolean | null | undefined | Event_registrationsDefaultArgs> = $Result.GetResult<Prisma.$Event_registrationsPayload, S>

  type Event_registrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Event_registrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Event_registrationsCountAggregateInputType | true
    }

  export interface Event_registrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event_registrations'], meta: { name: 'Event_registrations' } }
    /**
     * Find zero or one Event_registrations that matches the filter.
     * @param {Event_registrationsFindUniqueArgs} args - Arguments to find a Event_registrations
     * @example
     * // Get one Event_registrations
     * const event_registrations = await prisma.event_registrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Event_registrationsFindUniqueArgs>(args: SelectSubset<T, Event_registrationsFindUniqueArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event_registrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Event_registrationsFindUniqueOrThrowArgs} args - Arguments to find a Event_registrations
     * @example
     * // Get one Event_registrations
     * const event_registrations = await prisma.event_registrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Event_registrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, Event_registrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_registrationsFindFirstArgs} args - Arguments to find a Event_registrations
     * @example
     * // Get one Event_registrations
     * const event_registrations = await prisma.event_registrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Event_registrationsFindFirstArgs>(args?: SelectSubset<T, Event_registrationsFindFirstArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_registrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_registrationsFindFirstOrThrowArgs} args - Arguments to find a Event_registrations
     * @example
     * // Get one Event_registrations
     * const event_registrations = await prisma.event_registrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Event_registrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, Event_registrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Event_registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_registrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_registrations
     * const event_registrations = await prisma.event_registrations.findMany()
     * 
     * // Get first 10 Event_registrations
     * const event_registrations = await prisma.event_registrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_registrationsWithIdOnly = await prisma.event_registrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Event_registrationsFindManyArgs>(args?: SelectSubset<T, Event_registrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event_registrations.
     * @param {Event_registrationsCreateArgs} args - Arguments to create a Event_registrations.
     * @example
     * // Create one Event_registrations
     * const Event_registrations = await prisma.event_registrations.create({
     *   data: {
     *     // ... data to create a Event_registrations
     *   }
     * })
     * 
     */
    create<T extends Event_registrationsCreateArgs>(args: SelectSubset<T, Event_registrationsCreateArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Event_registrations.
     * @param {Event_registrationsCreateManyArgs} args - Arguments to create many Event_registrations.
     * @example
     * // Create many Event_registrations
     * const event_registrations = await prisma.event_registrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Event_registrationsCreateManyArgs>(args?: SelectSubset<T, Event_registrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_registrations and returns the data saved in the database.
     * @param {Event_registrationsCreateManyAndReturnArgs} args - Arguments to create many Event_registrations.
     * @example
     * // Create many Event_registrations
     * const event_registrations = await prisma.event_registrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_registrations and only return the `id`
     * const event_registrationsWithIdOnly = await prisma.event_registrations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Event_registrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, Event_registrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event_registrations.
     * @param {Event_registrationsDeleteArgs} args - Arguments to delete one Event_registrations.
     * @example
     * // Delete one Event_registrations
     * const Event_registrations = await prisma.event_registrations.delete({
     *   where: {
     *     // ... filter to delete one Event_registrations
     *   }
     * })
     * 
     */
    delete<T extends Event_registrationsDeleteArgs>(args: SelectSubset<T, Event_registrationsDeleteArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event_registrations.
     * @param {Event_registrationsUpdateArgs} args - Arguments to update one Event_registrations.
     * @example
     * // Update one Event_registrations
     * const event_registrations = await prisma.event_registrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Event_registrationsUpdateArgs>(args: SelectSubset<T, Event_registrationsUpdateArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Event_registrations.
     * @param {Event_registrationsDeleteManyArgs} args - Arguments to filter Event_registrations to delete.
     * @example
     * // Delete a few Event_registrations
     * const { count } = await prisma.event_registrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Event_registrationsDeleteManyArgs>(args?: SelectSubset<T, Event_registrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_registrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_registrations
     * const event_registrations = await prisma.event_registrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Event_registrationsUpdateManyArgs>(args: SelectSubset<T, Event_registrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_registrations and returns the data updated in the database.
     * @param {Event_registrationsUpdateManyAndReturnArgs} args - Arguments to update many Event_registrations.
     * @example
     * // Update many Event_registrations
     * const event_registrations = await prisma.event_registrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Event_registrations and only return the `id`
     * const event_registrationsWithIdOnly = await prisma.event_registrations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Event_registrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, Event_registrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event_registrations.
     * @param {Event_registrationsUpsertArgs} args - Arguments to update or create a Event_registrations.
     * @example
     * // Update or create a Event_registrations
     * const event_registrations = await prisma.event_registrations.upsert({
     *   create: {
     *     // ... data to create a Event_registrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_registrations we want to update
     *   }
     * })
     */
    upsert<T extends Event_registrationsUpsertArgs>(args: SelectSubset<T, Event_registrationsUpsertArgs<ExtArgs>>): Prisma__Event_registrationsClient<$Result.GetResult<Prisma.$Event_registrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Event_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_registrationsCountArgs} args - Arguments to filter Event_registrations to count.
     * @example
     * // Count the number of Event_registrations
     * const count = await prisma.event_registrations.count({
     *   where: {
     *     // ... the filter for the Event_registrations we want to count
     *   }
     * })
    **/
    count<T extends Event_registrationsCountArgs>(
      args?: Subset<T, Event_registrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_registrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_registrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_registrationsAggregateArgs>(args: Subset<T, Event_registrationsAggregateArgs>): Prisma.PrismaPromise<GetEvent_registrationsAggregateType<T>>

    /**
     * Group by Event_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_registrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Event_registrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Event_registrationsGroupByArgs['orderBy'] }
        : { orderBy?: Event_registrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Event_registrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_registrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event_registrations model
   */
  readonly fields: Event_registrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event_registrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Event_registrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event_registrations model
   */
  interface Event_registrationsFieldRefs {
    readonly id: FieldRef<"Event_registrations", 'Int'>
    readonly user_id: FieldRef<"Event_registrations", 'Int'>
    readonly event_id: FieldRef<"Event_registrations", 'Int'>
    readonly status: FieldRef<"Event_registrations", 'RegistrationStatus'>
    readonly completed: FieldRef<"Event_registrations", 'Boolean'>
    readonly registered_at: FieldRef<"Event_registrations", 'DateTime'>
    readonly canceled_at: FieldRef<"Event_registrations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event_registrations findUnique
   */
  export type Event_registrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which Event_registrations to fetch.
     */
    where: Event_registrationsWhereUniqueInput
  }

  /**
   * Event_registrations findUniqueOrThrow
   */
  export type Event_registrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which Event_registrations to fetch.
     */
    where: Event_registrationsWhereUniqueInput
  }

  /**
   * Event_registrations findFirst
   */
  export type Event_registrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which Event_registrations to fetch.
     */
    where?: Event_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_registrations to fetch.
     */
    orderBy?: Event_registrationsOrderByWithRelationInput | Event_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_registrations.
     */
    cursor?: Event_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_registrations.
     */
    distinct?: Event_registrationsScalarFieldEnum | Event_registrationsScalarFieldEnum[]
  }

  /**
   * Event_registrations findFirstOrThrow
   */
  export type Event_registrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which Event_registrations to fetch.
     */
    where?: Event_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_registrations to fetch.
     */
    orderBy?: Event_registrationsOrderByWithRelationInput | Event_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_registrations.
     */
    cursor?: Event_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_registrations.
     */
    distinct?: Event_registrationsScalarFieldEnum | Event_registrationsScalarFieldEnum[]
  }

  /**
   * Event_registrations findMany
   */
  export type Event_registrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * Filter, which Event_registrations to fetch.
     */
    where?: Event_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_registrations to fetch.
     */
    orderBy?: Event_registrationsOrderByWithRelationInput | Event_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Event_registrations.
     */
    cursor?: Event_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_registrations.
     */
    skip?: number
    distinct?: Event_registrationsScalarFieldEnum | Event_registrationsScalarFieldEnum[]
  }

  /**
   * Event_registrations create
   */
  export type Event_registrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Event_registrations.
     */
    data: XOR<Event_registrationsCreateInput, Event_registrationsUncheckedCreateInput>
  }

  /**
   * Event_registrations createMany
   */
  export type Event_registrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Event_registrations.
     */
    data: Event_registrationsCreateManyInput | Event_registrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event_registrations createManyAndReturn
   */
  export type Event_registrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * The data used to create many Event_registrations.
     */
    data: Event_registrationsCreateManyInput | Event_registrationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event_registrations update
   */
  export type Event_registrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Event_registrations.
     */
    data: XOR<Event_registrationsUpdateInput, Event_registrationsUncheckedUpdateInput>
    /**
     * Choose, which Event_registrations to update.
     */
    where: Event_registrationsWhereUniqueInput
  }

  /**
   * Event_registrations updateMany
   */
  export type Event_registrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Event_registrations.
     */
    data: XOR<Event_registrationsUpdateManyMutationInput, Event_registrationsUncheckedUpdateManyInput>
    /**
     * Filter which Event_registrations to update
     */
    where?: Event_registrationsWhereInput
    /**
     * Limit how many Event_registrations to update.
     */
    limit?: number
  }

  /**
   * Event_registrations updateManyAndReturn
   */
  export type Event_registrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * The data used to update Event_registrations.
     */
    data: XOR<Event_registrationsUpdateManyMutationInput, Event_registrationsUncheckedUpdateManyInput>
    /**
     * Filter which Event_registrations to update
     */
    where?: Event_registrationsWhereInput
    /**
     * Limit how many Event_registrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event_registrations upsert
   */
  export type Event_registrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Event_registrations to update in case it exists.
     */
    where: Event_registrationsWhereUniqueInput
    /**
     * In case the Event_registrations found by the `where` argument doesn't exist, create a new Event_registrations with this data.
     */
    create: XOR<Event_registrationsCreateInput, Event_registrationsUncheckedCreateInput>
    /**
     * In case the Event_registrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Event_registrationsUpdateInput, Event_registrationsUncheckedUpdateInput>
  }

  /**
   * Event_registrations delete
   */
  export type Event_registrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
    /**
     * Filter which Event_registrations to delete.
     */
    where: Event_registrationsWhereUniqueInput
  }

  /**
   * Event_registrations deleteMany
   */
  export type Event_registrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event_registrations to delete
     */
    where?: Event_registrationsWhereInput
    /**
     * Limit how many Event_registrations to delete.
     */
    limit?: number
  }

  /**
   * Event_registrations without action
   */
  export type Event_registrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event_registrations
     */
    select?: Event_registrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event_registrations
     */
    omit?: Event_registrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Event_registrationsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    message: string | null
    type: $Enums.NotificationType | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    message: string | null
    type: $Enums.NotificationType | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    message: number
    type: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    message?: true
    type?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    message?: true
    type?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    message?: true
    type?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number
    event_id: number | null
    message: string
    type: $Enums.NotificationType
    is_read: boolean
    created_at: Date
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | Notifications$eventArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | Notifications$eventArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | Notifications$eventArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "message" | "type" | "is_read" | "created_at", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | Notifications$eventArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | Notifications$eventArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | Notifications$eventArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      event: Prisma.$EventsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      event_id: number | null
      message: string
      type: $Enums.NotificationType
      is_read: boolean
      created_at: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends Notifications$eventArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$eventArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'Int'>
    readonly user_id: FieldRef<"Notifications", 'Int'>
    readonly event_id: FieldRef<"Notifications", 'Int'>
    readonly message: FieldRef<"Notifications", 'String'>
    readonly type: FieldRef<"Notifications", 'NotificationType'>
    readonly is_read: FieldRef<"Notifications", 'Boolean'>
    readonly created_at: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications.event
   */
  export type Notifications$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    content: number
    created_at: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    content?: true
    created_at?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    content?: true
    created_at?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    event_id: number
    user_id: number
    content: string
    created_at: Date
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    likes?: boolean | Posts$likesArgs<ExtArgs>
    media?: boolean | Posts$mediaArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "content" | "created_at", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
    comments?: boolean | Posts$commentsArgs<ExtArgs>
    likes?: boolean | Posts$likesArgs<ExtArgs>
    media?: boolean | Posts$mediaArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      event: Prisma.$EventsPayload<ExtArgs>
      author: Prisma.$UsersPayload<ExtArgs>
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      media: Prisma.$Post_mediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      user_id: number
      content: string
      created_at: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, Posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Posts$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Posts$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'Int'>
    readonly event_id: FieldRef<"Posts", 'Int'>
    readonly user_id: FieldRef<"Posts", 'Int'>
    readonly content: FieldRef<"Posts", 'String'>
    readonly created_at: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.comments
   */
  export type Posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Posts.likes
   */
  export type Posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Posts.media
   */
  export type Posts$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    where?: Post_mediaWhereInput
    orderBy?: Post_mediaOrderByWithRelationInput | Post_mediaOrderByWithRelationInput[]
    cursor?: Post_mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_mediaScalarFieldEnum | Post_mediaScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    post_id: number
    user_id: number
    content: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    post_id: number
    user_id: number
    content: string
    created_at: Date
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "post_id" | "user_id" | "content" | "created_at", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      post_id: number
      user_id: number
      content: string
      created_at: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly post_id: FieldRef<"Comments", 'Int'>
    readonly user_id: FieldRef<"Comments", 'Int'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly created_at: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    post_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    created_at?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    created_at?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: number
    post_id: number
    user_id: number
    created_at: Date
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "post_id" | "user_id" | "created_at", ExtArgs["result"]["likes"]>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      post_id: number
      user_id: number
      created_at: Date
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikesUpdateManyAndReturnArgs>(args: SelectSubset<T, LikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'Int'>
    readonly post_id: FieldRef<"Likes", 'Int'>
    readonly user_id: FieldRef<"Likes", 'Int'>
    readonly created_at: FieldRef<"Likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Likes updateManyAndReturn
   */
  export type LikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Post_media
   */

  export type AggregatePost_media = {
    _count: Post_mediaCountAggregateOutputType | null
    _avg: Post_mediaAvgAggregateOutputType | null
    _sum: Post_mediaSumAggregateOutputType | null
    _min: Post_mediaMinAggregateOutputType | null
    _max: Post_mediaMaxAggregateOutputType | null
  }

  export type Post_mediaAvgAggregateOutputType = {
    id: number | null
    post_id: number | null
  }

  export type Post_mediaSumAggregateOutputType = {
    id: number | null
    post_id: number | null
  }

  export type Post_mediaMinAggregateOutputType = {
    id: number | null
    post_id: number | null
    file_url: string | null
    file_type: $Enums.PostMediaType | null
    created_at: Date | null
  }

  export type Post_mediaMaxAggregateOutputType = {
    id: number | null
    post_id: number | null
    file_url: string | null
    file_type: $Enums.PostMediaType | null
    created_at: Date | null
  }

  export type Post_mediaCountAggregateOutputType = {
    id: number
    post_id: number
    file_url: number
    file_type: number
    created_at: number
    _all: number
  }


  export type Post_mediaAvgAggregateInputType = {
    id?: true
    post_id?: true
  }

  export type Post_mediaSumAggregateInputType = {
    id?: true
    post_id?: true
  }

  export type Post_mediaMinAggregateInputType = {
    id?: true
    post_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type Post_mediaMaxAggregateInputType = {
    id?: true
    post_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type Post_mediaCountAggregateInputType = {
    id?: true
    post_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
    _all?: true
  }

  export type Post_mediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post_media to aggregate.
     */
    where?: Post_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post_medias to fetch.
     */
    orderBy?: Post_mediaOrderByWithRelationInput | Post_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Post_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Post_medias
    **/
    _count?: true | Post_mediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Post_mediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Post_mediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_mediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_mediaMaxAggregateInputType
  }

  export type GetPost_mediaAggregateType<T extends Post_mediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_media]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_media[P]>
      : GetScalarType<T[P], AggregatePost_media[P]>
  }




  export type Post_mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Post_mediaWhereInput
    orderBy?: Post_mediaOrderByWithAggregationInput | Post_mediaOrderByWithAggregationInput[]
    by: Post_mediaScalarFieldEnum[] | Post_mediaScalarFieldEnum
    having?: Post_mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_mediaCountAggregateInputType | true
    _avg?: Post_mediaAvgAggregateInputType
    _sum?: Post_mediaSumAggregateInputType
    _min?: Post_mediaMinAggregateInputType
    _max?: Post_mediaMaxAggregateInputType
  }

  export type Post_mediaGroupByOutputType = {
    id: number
    post_id: number
    file_url: string | null
    file_type: $Enums.PostMediaType
    created_at: Date
    _count: Post_mediaCountAggregateOutputType | null
    _avg: Post_mediaAvgAggregateOutputType | null
    _sum: Post_mediaSumAggregateOutputType | null
    _min: Post_mediaMinAggregateOutputType | null
    _max: Post_mediaMaxAggregateOutputType | null
  }

  type GetPost_mediaGroupByPayload<T extends Post_mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_mediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_mediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_mediaGroupByOutputType[P]>
            : GetScalarType<T[P], Post_mediaGroupByOutputType[P]>
        }
      >
    >


  export type Post_mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_media"]>

  export type Post_mediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_media"]>

  export type Post_mediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_media"]>

  export type Post_mediaSelectScalar = {
    id?: boolean
    post_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
  }

  export type Post_mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "post_id" | "file_url" | "file_type" | "created_at", ExtArgs["result"]["post_media"]>
  export type Post_mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type Post_mediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type Post_mediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $Post_mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post_media"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      post_id: number
      file_url: string | null
      file_type: $Enums.PostMediaType
      created_at: Date
    }, ExtArgs["result"]["post_media"]>
    composites: {}
  }

  type Post_mediaGetPayload<S extends boolean | null | undefined | Post_mediaDefaultArgs> = $Result.GetResult<Prisma.$Post_mediaPayload, S>

  type Post_mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Post_mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_mediaCountAggregateInputType | true
    }

  export interface Post_mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post_media'], meta: { name: 'Post_media' } }
    /**
     * Find zero or one Post_media that matches the filter.
     * @param {Post_mediaFindUniqueArgs} args - Arguments to find a Post_media
     * @example
     * // Get one Post_media
     * const post_media = await prisma.post_media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Post_mediaFindUniqueArgs>(args: SelectSubset<T, Post_mediaFindUniqueArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Post_mediaFindUniqueOrThrowArgs} args - Arguments to find a Post_media
     * @example
     * // Get one Post_media
     * const post_media = await prisma.post_media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Post_mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, Post_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_mediaFindFirstArgs} args - Arguments to find a Post_media
     * @example
     * // Get one Post_media
     * const post_media = await prisma.post_media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Post_mediaFindFirstArgs>(args?: SelectSubset<T, Post_mediaFindFirstArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_mediaFindFirstOrThrowArgs} args - Arguments to find a Post_media
     * @example
     * // Get one Post_media
     * const post_media = await prisma.post_media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Post_mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, Post_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_medias
     * const post_medias = await prisma.post_media.findMany()
     * 
     * // Get first 10 Post_medias
     * const post_medias = await prisma.post_media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const post_mediaWithIdOnly = await prisma.post_media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Post_mediaFindManyArgs>(args?: SelectSubset<T, Post_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_media.
     * @param {Post_mediaCreateArgs} args - Arguments to create a Post_media.
     * @example
     * // Create one Post_media
     * const Post_media = await prisma.post_media.create({
     *   data: {
     *     // ... data to create a Post_media
     *   }
     * })
     * 
     */
    create<T extends Post_mediaCreateArgs>(args: SelectSubset<T, Post_mediaCreateArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_medias.
     * @param {Post_mediaCreateManyArgs} args - Arguments to create many Post_medias.
     * @example
     * // Create many Post_medias
     * const post_media = await prisma.post_media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Post_mediaCreateManyArgs>(args?: SelectSubset<T, Post_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_medias and returns the data saved in the database.
     * @param {Post_mediaCreateManyAndReturnArgs} args - Arguments to create many Post_medias.
     * @example
     * // Create many Post_medias
     * const post_media = await prisma.post_media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_medias and only return the `id`
     * const post_mediaWithIdOnly = await prisma.post_media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Post_mediaCreateManyAndReturnArgs>(args?: SelectSubset<T, Post_mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_media.
     * @param {Post_mediaDeleteArgs} args - Arguments to delete one Post_media.
     * @example
     * // Delete one Post_media
     * const Post_media = await prisma.post_media.delete({
     *   where: {
     *     // ... filter to delete one Post_media
     *   }
     * })
     * 
     */
    delete<T extends Post_mediaDeleteArgs>(args: SelectSubset<T, Post_mediaDeleteArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_media.
     * @param {Post_mediaUpdateArgs} args - Arguments to update one Post_media.
     * @example
     * // Update one Post_media
     * const post_media = await prisma.post_media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Post_mediaUpdateArgs>(args: SelectSubset<T, Post_mediaUpdateArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_medias.
     * @param {Post_mediaDeleteManyArgs} args - Arguments to filter Post_medias to delete.
     * @example
     * // Delete a few Post_medias
     * const { count } = await prisma.post_media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Post_mediaDeleteManyArgs>(args?: SelectSubset<T, Post_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_medias
     * const post_media = await prisma.post_media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Post_mediaUpdateManyArgs>(args: SelectSubset<T, Post_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_medias and returns the data updated in the database.
     * @param {Post_mediaUpdateManyAndReturnArgs} args - Arguments to update many Post_medias.
     * @example
     * // Update many Post_medias
     * const post_media = await prisma.post_media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_medias and only return the `id`
     * const post_mediaWithIdOnly = await prisma.post_media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Post_mediaUpdateManyAndReturnArgs>(args: SelectSubset<T, Post_mediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_media.
     * @param {Post_mediaUpsertArgs} args - Arguments to update or create a Post_media.
     * @example
     * // Update or create a Post_media
     * const post_media = await prisma.post_media.upsert({
     *   create: {
     *     // ... data to create a Post_media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_media we want to update
     *   }
     * })
     */
    upsert<T extends Post_mediaUpsertArgs>(args: SelectSubset<T, Post_mediaUpsertArgs<ExtArgs>>): Prisma__Post_mediaClient<$Result.GetResult<Prisma.$Post_mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_mediaCountArgs} args - Arguments to filter Post_medias to count.
     * @example
     * // Count the number of Post_medias
     * const count = await prisma.post_media.count({
     *   where: {
     *     // ... the filter for the Post_medias we want to count
     *   }
     * })
    **/
    count<T extends Post_mediaCountArgs>(
      args?: Subset<T, Post_mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_mediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_mediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Post_mediaAggregateArgs>(args: Subset<T, Post_mediaAggregateArgs>): Prisma.PrismaPromise<GetPost_mediaAggregateType<T>>

    /**
     * Group by Post_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Post_mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Post_mediaGroupByArgs['orderBy'] }
        : { orderBy?: Post_mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Post_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post_media model
   */
  readonly fields: Post_mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post_media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Post_mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post_media model
   */
  interface Post_mediaFieldRefs {
    readonly id: FieldRef<"Post_media", 'Int'>
    readonly post_id: FieldRef<"Post_media", 'Int'>
    readonly file_url: FieldRef<"Post_media", 'String'>
    readonly file_type: FieldRef<"Post_media", 'PostMediaType'>
    readonly created_at: FieldRef<"Post_media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post_media findUnique
   */
  export type Post_mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Post_media to fetch.
     */
    where: Post_mediaWhereUniqueInput
  }

  /**
   * Post_media findUniqueOrThrow
   */
  export type Post_mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Post_media to fetch.
     */
    where: Post_mediaWhereUniqueInput
  }

  /**
   * Post_media findFirst
   */
  export type Post_mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Post_media to fetch.
     */
    where?: Post_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post_medias to fetch.
     */
    orderBy?: Post_mediaOrderByWithRelationInput | Post_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Post_medias.
     */
    cursor?: Post_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Post_medias.
     */
    distinct?: Post_mediaScalarFieldEnum | Post_mediaScalarFieldEnum[]
  }

  /**
   * Post_media findFirstOrThrow
   */
  export type Post_mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Post_media to fetch.
     */
    where?: Post_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post_medias to fetch.
     */
    orderBy?: Post_mediaOrderByWithRelationInput | Post_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Post_medias.
     */
    cursor?: Post_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Post_medias.
     */
    distinct?: Post_mediaScalarFieldEnum | Post_mediaScalarFieldEnum[]
  }

  /**
   * Post_media findMany
   */
  export type Post_mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * Filter, which Post_medias to fetch.
     */
    where?: Post_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post_medias to fetch.
     */
    orderBy?: Post_mediaOrderByWithRelationInput | Post_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Post_medias.
     */
    cursor?: Post_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post_medias.
     */
    skip?: number
    distinct?: Post_mediaScalarFieldEnum | Post_mediaScalarFieldEnum[]
  }

  /**
   * Post_media create
   */
  export type Post_mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Post_media.
     */
    data: XOR<Post_mediaCreateInput, Post_mediaUncheckedCreateInput>
  }

  /**
   * Post_media createMany
   */
  export type Post_mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Post_medias.
     */
    data: Post_mediaCreateManyInput | Post_mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post_media createManyAndReturn
   */
  export type Post_mediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * The data used to create many Post_medias.
     */
    data: Post_mediaCreateManyInput | Post_mediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post_media update
   */
  export type Post_mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Post_media.
     */
    data: XOR<Post_mediaUpdateInput, Post_mediaUncheckedUpdateInput>
    /**
     * Choose, which Post_media to update.
     */
    where: Post_mediaWhereUniqueInput
  }

  /**
   * Post_media updateMany
   */
  export type Post_mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Post_medias.
     */
    data: XOR<Post_mediaUpdateManyMutationInput, Post_mediaUncheckedUpdateManyInput>
    /**
     * Filter which Post_medias to update
     */
    where?: Post_mediaWhereInput
    /**
     * Limit how many Post_medias to update.
     */
    limit?: number
  }

  /**
   * Post_media updateManyAndReturn
   */
  export type Post_mediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * The data used to update Post_medias.
     */
    data: XOR<Post_mediaUpdateManyMutationInput, Post_mediaUncheckedUpdateManyInput>
    /**
     * Filter which Post_medias to update
     */
    where?: Post_mediaWhereInput
    /**
     * Limit how many Post_medias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post_media upsert
   */
  export type Post_mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Post_media to update in case it exists.
     */
    where: Post_mediaWhereUniqueInput
    /**
     * In case the Post_media found by the `where` argument doesn't exist, create a new Post_media with this data.
     */
    create: XOR<Post_mediaCreateInput, Post_mediaUncheckedCreateInput>
    /**
     * In case the Post_media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Post_mediaUpdateInput, Post_mediaUncheckedUpdateInput>
  }

  /**
   * Post_media delete
   */
  export type Post_mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
    /**
     * Filter which Post_media to delete.
     */
    where: Post_mediaWhereUniqueInput
  }

  /**
   * Post_media deleteMany
   */
  export type Post_mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post_medias to delete
     */
    where?: Post_mediaWhereInput
    /**
     * Limit how many Post_medias to delete.
     */
    limit?: number
  }

  /**
   * Post_media without action
   */
  export type Post_mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_media
     */
    select?: Post_mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post_media
     */
    omit?: Post_mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post_mediaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    location: 'location',
    start_date: 'start_date',
    end_date: 'end_date',
    max_participants: 'max_participants',
    created_by: 'created_by',
    approved_by: 'approved_by',
    status: 'status',
    created_at: 'created_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const Event_registrationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    status: 'status',
    completed: 'completed',
    registered_at: 'registered_at',
    canceled_at: 'canceled_at'
  };

  export type Event_registrationsScalarFieldEnum = (typeof Event_registrationsScalarFieldEnum)[keyof typeof Event_registrationsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    message: 'message',
    type: 'type',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    content: 'content',
    created_at: 'created_at'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    user_id: 'user_id',
    content: 'content',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const Post_mediaScalarFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    file_url: 'file_url',
    file_type: 'file_type',
    created_at: 'created_at'
  };

  export type Post_mediaScalarFieldEnum = (typeof Post_mediaScalarFieldEnum)[keyof typeof Post_mediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'RegistrationStatus[]'
   */
  export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'PostMediaType'
   */
  export type EnumPostMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostMediaType'>
    


  /**
   * Reference to a field of type 'PostMediaType[]'
   */
  export type ListEnumPostMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostMediaType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"Users"> | Date | string
    events_created?: EventsListRelationFilter
    events_approved?: EventsListRelationFilter
    registrations?: Event_registrationsListRelationFilter
    notifications?: NotificationsListRelationFilter
    posts?: PostsListRelationFilter
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    events_created?: EventsOrderByRelationAggregateInput
    events_approved?: EventsOrderByRelationAggregateInput
    registrations?: Event_registrationsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    posts?: PostsOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    created_at?: DateTimeFilter<"Users"> | Date | string
    events_created?: EventsListRelationFilter
    events_approved?: EventsListRelationFilter
    registrations?: Event_registrationsListRelationFilter
    notifications?: NotificationsListRelationFilter
    posts?: PostsListRelationFilter
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"Users"> | $Enums.UserStatus
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: IntFilter<"Events"> | number
    title?: StringFilter<"Events"> | string
    description?: StringNullableFilter<"Events"> | string | null
    category?: StringNullableFilter<"Events"> | string | null
    location?: StringFilter<"Events"> | string
    start_date?: DateTimeFilter<"Events"> | Date | string
    end_date?: DateTimeFilter<"Events"> | Date | string
    max_participants?: IntNullableFilter<"Events"> | number | null
    created_by?: IntNullableFilter<"Events"> | number | null
    approved_by?: IntNullableFilter<"Events"> | number | null
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeFilter<"Events"> | Date | string
    creator?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    approver?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    registrations?: Event_registrationsListRelationFilter
    notifications?: NotificationsListRelationFilter
    posts?: PostsListRelationFilter
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_participants?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    creator?: UsersOrderByWithRelationInput
    approver?: UsersOrderByWithRelationInput
    registrations?: Event_registrationsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    posts?: PostsOrderByRelationAggregateInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    title?: StringFilter<"Events"> | string
    description?: StringNullableFilter<"Events"> | string | null
    category?: StringNullableFilter<"Events"> | string | null
    location?: StringFilter<"Events"> | string
    start_date?: DateTimeFilter<"Events"> | Date | string
    end_date?: DateTimeFilter<"Events"> | Date | string
    max_participants?: IntNullableFilter<"Events"> | number | null
    created_by?: IntNullableFilter<"Events"> | number | null
    approved_by?: IntNullableFilter<"Events"> | number | null
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeFilter<"Events"> | Date | string
    creator?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    approver?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    registrations?: Event_registrationsListRelationFilter
    notifications?: NotificationsListRelationFilter
    posts?: PostsListRelationFilter
  }, "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_participants?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    approved_by?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Events"> | number
    title?: StringWithAggregatesFilter<"Events"> | string
    description?: StringNullableWithAggregatesFilter<"Events"> | string | null
    category?: StringNullableWithAggregatesFilter<"Events"> | string | null
    location?: StringWithAggregatesFilter<"Events"> | string
    start_date?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    max_participants?: IntNullableWithAggregatesFilter<"Events"> | number | null
    created_by?: IntNullableWithAggregatesFilter<"Events"> | number | null
    approved_by?: IntNullableWithAggregatesFilter<"Events"> | number | null
    status?: EnumEventStatusWithAggregatesFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeWithAggregatesFilter<"Events"> | Date | string
  }

  export type Event_registrationsWhereInput = {
    AND?: Event_registrationsWhereInput | Event_registrationsWhereInput[]
    OR?: Event_registrationsWhereInput[]
    NOT?: Event_registrationsWhereInput | Event_registrationsWhereInput[]
    id?: IntFilter<"Event_registrations"> | number
    user_id?: IntFilter<"Event_registrations"> | number
    event_id?: IntFilter<"Event_registrations"> | number
    status?: EnumRegistrationStatusFilter<"Event_registrations"> | $Enums.RegistrationStatus
    completed?: BoolFilter<"Event_registrations"> | boolean
    registered_at?: DateTimeFilter<"Event_registrations"> | Date | string
    canceled_at?: DateTimeNullableFilter<"Event_registrations"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }

  export type Event_registrationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    completed?: SortOrder
    registered_at?: SortOrder
    canceled_at?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    event?: EventsOrderByWithRelationInput
  }

  export type Event_registrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Event_registrationsWhereInput | Event_registrationsWhereInput[]
    OR?: Event_registrationsWhereInput[]
    NOT?: Event_registrationsWhereInput | Event_registrationsWhereInput[]
    user_id?: IntFilter<"Event_registrations"> | number
    event_id?: IntFilter<"Event_registrations"> | number
    status?: EnumRegistrationStatusFilter<"Event_registrations"> | $Enums.RegistrationStatus
    completed?: BoolFilter<"Event_registrations"> | boolean
    registered_at?: DateTimeFilter<"Event_registrations"> | Date | string
    canceled_at?: DateTimeNullableFilter<"Event_registrations"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
  }, "id">

  export type Event_registrationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    completed?: SortOrder
    registered_at?: SortOrder
    canceled_at?: SortOrderInput | SortOrder
    _count?: Event_registrationsCountOrderByAggregateInput
    _avg?: Event_registrationsAvgOrderByAggregateInput
    _max?: Event_registrationsMaxOrderByAggregateInput
    _min?: Event_registrationsMinOrderByAggregateInput
    _sum?: Event_registrationsSumOrderByAggregateInput
  }

  export type Event_registrationsScalarWhereWithAggregatesInput = {
    AND?: Event_registrationsScalarWhereWithAggregatesInput | Event_registrationsScalarWhereWithAggregatesInput[]
    OR?: Event_registrationsScalarWhereWithAggregatesInput[]
    NOT?: Event_registrationsScalarWhereWithAggregatesInput | Event_registrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event_registrations"> | number
    user_id?: IntWithAggregatesFilter<"Event_registrations"> | number
    event_id?: IntWithAggregatesFilter<"Event_registrations"> | number
    status?: EnumRegistrationStatusWithAggregatesFilter<"Event_registrations"> | $Enums.RegistrationStatus
    completed?: BoolWithAggregatesFilter<"Event_registrations"> | boolean
    registered_at?: DateTimeWithAggregatesFilter<"Event_registrations"> | Date | string
    canceled_at?: DateTimeNullableWithAggregatesFilter<"Event_registrations"> | Date | string | null
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: IntFilter<"Notifications"> | number
    user_id?: IntFilter<"Notifications"> | number
    event_id?: IntNullableFilter<"Notifications"> | number | null
    message?: StringFilter<"Notifications"> | string
    type?: EnumNotificationTypeFilter<"Notifications"> | $Enums.NotificationType
    is_read?: BoolFilter<"Notifications"> | boolean
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsNullableScalarRelationFilter, EventsWhereInput> | null
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    event?: EventsOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    user_id?: IntFilter<"Notifications"> | number
    event_id?: IntNullableFilter<"Notifications"> | number | null
    message?: StringFilter<"Notifications"> | string
    type?: EnumNotificationTypeFilter<"Notifications"> | $Enums.NotificationType
    is_read?: BoolFilter<"Notifications"> | boolean
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsNullableScalarRelationFilter, EventsWhereInput> | null
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notifications"> | number
    user_id?: IntWithAggregatesFilter<"Notifications"> | number
    event_id?: IntNullableWithAggregatesFilter<"Notifications"> | number | null
    message?: StringWithAggregatesFilter<"Notifications"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notifications"> | $Enums.NotificationType
    is_read?: BoolWithAggregatesFilter<"Notifications"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: IntFilter<"Posts"> | number
    event_id?: IntFilter<"Posts"> | number
    user_id?: IntFilter<"Posts"> | number
    content?: StringFilter<"Posts"> | string
    created_at?: DateTimeFilter<"Posts"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    media?: Post_mediaListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    event?: EventsOrderByWithRelationInput
    author?: UsersOrderByWithRelationInput
    comments?: CommentsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    media?: Post_mediaOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    event_id?: IntFilter<"Posts"> | number
    user_id?: IntFilter<"Posts"> | number
    content?: StringFilter<"Posts"> | string
    created_at?: DateTimeFilter<"Posts"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    media?: Post_mediaListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posts"> | number
    event_id?: IntWithAggregatesFilter<"Posts"> | number
    user_id?: IntWithAggregatesFilter<"Posts"> | number
    content?: StringWithAggregatesFilter<"Posts"> | string
    created_at?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    post_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    created_at?: DateTimeFilter<"Comments"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    post?: PostsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    post_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    created_at?: DateTimeFilter<"Comments"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    post_id?: IntWithAggregatesFilter<"Comments"> | number
    user_id?: IntWithAggregatesFilter<"Comments"> | number
    content?: StringWithAggregatesFilter<"Comments"> | string
    created_at?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: IntFilter<"Likes"> | number
    post_id?: IntFilter<"Likes"> | number
    user_id?: IntFilter<"Likes"> | number
    created_at?: DateTimeFilter<"Likes"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    post?: PostsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    likes_index_0?: LikesLikes_index_0CompoundUniqueInput
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    post_id?: IntFilter<"Likes"> | number
    user_id?: IntFilter<"Likes"> | number
    created_at?: DateTimeFilter<"Likes"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "likes_index_0">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _avg?: LikesAvgOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
    _sum?: LikesSumOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Likes"> | number
    post_id?: IntWithAggregatesFilter<"Likes"> | number
    user_id?: IntWithAggregatesFilter<"Likes"> | number
    created_at?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
  }

  export type Post_mediaWhereInput = {
    AND?: Post_mediaWhereInput | Post_mediaWhereInput[]
    OR?: Post_mediaWhereInput[]
    NOT?: Post_mediaWhereInput | Post_mediaWhereInput[]
    id?: IntFilter<"Post_media"> | number
    post_id?: IntFilter<"Post_media"> | number
    file_url?: StringNullableFilter<"Post_media"> | string | null
    file_type?: EnumPostMediaTypeFilter<"Post_media"> | $Enums.PostMediaType
    created_at?: DateTimeFilter<"Post_media"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type Post_mediaOrderByWithRelationInput = {
    id?: SortOrder
    post_id?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
    post?: PostsOrderByWithRelationInput
  }

  export type Post_mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Post_mediaWhereInput | Post_mediaWhereInput[]
    OR?: Post_mediaWhereInput[]
    NOT?: Post_mediaWhereInput | Post_mediaWhereInput[]
    post_id?: IntFilter<"Post_media"> | number
    file_url?: StringNullableFilter<"Post_media"> | string | null
    file_type?: EnumPostMediaTypeFilter<"Post_media"> | $Enums.PostMediaType
    created_at?: DateTimeFilter<"Post_media"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id">

  export type Post_mediaOrderByWithAggregationInput = {
    id?: SortOrder
    post_id?: SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
    _count?: Post_mediaCountOrderByAggregateInput
    _avg?: Post_mediaAvgOrderByAggregateInput
    _max?: Post_mediaMaxOrderByAggregateInput
    _min?: Post_mediaMinOrderByAggregateInput
    _sum?: Post_mediaSumOrderByAggregateInput
  }

  export type Post_mediaScalarWhereWithAggregatesInput = {
    AND?: Post_mediaScalarWhereWithAggregatesInput | Post_mediaScalarWhereWithAggregatesInput[]
    OR?: Post_mediaScalarWhereWithAggregatesInput[]
    NOT?: Post_mediaScalarWhereWithAggregatesInput | Post_mediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post_media"> | number
    post_id?: IntWithAggregatesFilter<"Post_media"> | number
    file_url?: StringNullableWithAggregatesFilter<"Post_media"> | string | null
    file_type?: EnumPostMediaTypeWithAggregatesFilter<"Post_media"> | $Enums.PostMediaType
    created_at?: DateTimeWithAggregatesFilter<"Post_media"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsCreateNestedManyWithoutCreatorInput
    events_approved?: EventsCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    posts?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsUncheckedCreateNestedManyWithoutCreatorInput
    events_approved?: EventsUncheckedCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    posts?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUncheckedUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUncheckedUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateInput = {
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    creator?: UsersCreateNestedOneWithoutEvents_createdInput
    approver?: UsersCreateNestedOneWithoutEvents_approvedInput
    registrations?: Event_registrationsCreateNestedManyWithoutEventInput
    notifications?: NotificationsCreateNestedManyWithoutEventInput
    posts?: PostsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    created_by?: number | null
    approved_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutEventInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutEventInput
    posts?: PostsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneWithoutEvents_createdNestedInput
    approver?: UsersUpdateOneWithoutEvents_approvedNestedInput
    registrations?: Event_registrationsUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUpdateManyWithoutEventNestedInput
    posts?: PostsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: Event_registrationsUncheckedUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutEventNestedInput
    posts?: PostsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    created_by?: number | null
    approved_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
  }

  export type EventsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event_registrationsCreateInput = {
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
    user: UsersCreateNestedOneWithoutRegistrationsInput
    event: EventsCreateNestedOneWithoutRegistrationsInput
  }

  export type Event_registrationsUncheckedCreateInput = {
    id?: number
    user_id: number
    event_id: number
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
  }

  export type Event_registrationsUpdateInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutRegistrationsNestedInput
    event?: EventsUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type Event_registrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Event_registrationsCreateManyInput = {
    id?: number
    user_id: number
    event_id: number
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
  }

  export type Event_registrationsUpdateManyMutationInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Event_registrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationsCreateInput = {
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutNotificationsInput
    event?: EventsCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: number
    user_id: number
    event_id?: number | null
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
  }

  export type NotificationsUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
    event?: EventsUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    id?: number
    user_id: number
    event_id?: number | null
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateInput = {
    content: string
    created_at?: Date | string
    event: EventsCreateNestedOneWithoutPostsInput
    author: UsersCreateNestedOneWithoutPostsInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    media?: Post_mediaCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: number
    event_id: number
    user_id: number
    content: string
    created_at?: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    media?: Post_mediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutPostsNestedInput
    author?: UsersUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    media?: Post_mediaUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    media?: Post_mediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: number
    event_id: number
    user_id: number
    content: string
    created_at?: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    content: string
    created_at?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
    user: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    post_id: number
    user_id: number
    content: string
    created_at?: Date | string
  }

  export type CommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyInput = {
    id?: number
    post_id: number
    user_id: number
    content: string
    created_at?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateInput = {
    created_at?: Date | string
    post: PostsCreateNestedOneWithoutLikesInput
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: number
    post_id: number
    user_id: number
    created_at?: Date | string
  }

  export type LikesUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutLikesNestedInput
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateManyInput = {
    id?: number
    post_id: number
    user_id: number
    created_at?: Date | string
  }

  export type LikesUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Post_mediaCreateInput = {
    file_url?: string | null
    file_type?: $Enums.PostMediaType
    created_at?: Date | string
    post: PostsCreateNestedOneWithoutMediaInput
  }

  export type Post_mediaUncheckedCreateInput = {
    id?: number
    post_id: number
    file_url?: string | null
    file_type?: $Enums.PostMediaType
    created_at?: Date | string
  }

  export type Post_mediaUpdateInput = {
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: EnumPostMediaTypeFieldUpdateOperationsInput | $Enums.PostMediaType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutMediaNestedInput
  }

  export type Post_mediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: EnumPostMediaTypeFieldUpdateOperationsInput | $Enums.PostMediaType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Post_mediaCreateManyInput = {
    id?: number
    post_id: number
    file_url?: string | null
    file_type?: $Enums.PostMediaType
    created_at?: Date | string
  }

  export type Post_mediaUpdateManyMutationInput = {
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: EnumPostMediaTypeFieldUpdateOperationsInput | $Enums.PostMediaType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Post_mediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: EnumPostMediaTypeFieldUpdateOperationsInput | $Enums.PostMediaType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type Event_registrationsListRelationFilter = {
    every?: Event_registrationsWhereInput
    some?: Event_registrationsWhereInput
    none?: Event_registrationsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Event_registrationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_participants?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    id?: SortOrder
    max_participants?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_participants?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_participants?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    id?: SortOrder
    max_participants?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type EventsScalarRelationFilter = {
    is?: EventsWhereInput
    isNot?: EventsWhereInput
  }

  export type Event_registrationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    completed?: SortOrder
    registered_at?: SortOrder
    canceled_at?: SortOrder
  }

  export type Event_registrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type Event_registrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    completed?: SortOrder
    registered_at?: SortOrder
    canceled_at?: SortOrder
  }

  export type Event_registrationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    status?: SortOrder
    completed?: SortOrder
    registered_at?: SortOrder
    canceled_at?: SortOrder
  }

  export type Event_registrationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EventsNullableScalarRelationFilter = {
    is?: EventsWhereInput | null
    isNot?: EventsWhereInput | null
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type Post_mediaListRelationFilter = {
    every?: Post_mediaWhereInput
    some?: Post_mediaWhereInput
    none?: Post_mediaWhereInput
  }

  export type Post_mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type LikesLikes_index_0CompoundUniqueInput = {
    post_id: number
    user_id: number
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type LikesAvgOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type LikesSumOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumPostMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostMediaType | EnumPostMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostMediaTypeFilter<$PrismaModel> | $Enums.PostMediaType
  }

  export type Post_mediaCountOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type Post_mediaAvgOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
  }

  export type Post_mediaMaxOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type Post_mediaMinOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type Post_mediaSumOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
  }

  export type EnumPostMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostMediaType | EnumPostMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumPostMediaTypeFilter<$PrismaModel>
  }

  export type EventsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EventsCreateWithoutCreatorInput, EventsUncheckedCreateWithoutCreatorInput> | EventsCreateWithoutCreatorInput[] | EventsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCreatorInput | EventsCreateOrConnectWithoutCreatorInput[]
    createMany?: EventsCreateManyCreatorInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type EventsCreateNestedManyWithoutApproverInput = {
    create?: XOR<EventsCreateWithoutApproverInput, EventsUncheckedCreateWithoutApproverInput> | EventsCreateWithoutApproverInput[] | EventsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutApproverInput | EventsCreateOrConnectWithoutApproverInput[]
    createMany?: EventsCreateManyApproverInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type Event_registrationsCreateNestedManyWithoutUserInput = {
    create?: XOR<Event_registrationsCreateWithoutUserInput, Event_registrationsUncheckedCreateWithoutUserInput> | Event_registrationsCreateWithoutUserInput[] | Event_registrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutUserInput | Event_registrationsCreateOrConnectWithoutUserInput[]
    createMany?: Event_registrationsCreateManyUserInputEnvelope
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PostsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EventsCreateWithoutCreatorInput, EventsUncheckedCreateWithoutCreatorInput> | EventsCreateWithoutCreatorInput[] | EventsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCreatorInput | EventsCreateOrConnectWithoutCreatorInput[]
    createMany?: EventsCreateManyCreatorInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<EventsCreateWithoutApproverInput, EventsUncheckedCreateWithoutApproverInput> | EventsCreateWithoutApproverInput[] | EventsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutApproverInput | EventsCreateOrConnectWithoutApproverInput[]
    createMany?: EventsCreateManyApproverInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type Event_registrationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Event_registrationsCreateWithoutUserInput, Event_registrationsUncheckedCreateWithoutUserInput> | Event_registrationsCreateWithoutUserInput[] | Event_registrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutUserInput | Event_registrationsCreateOrConnectWithoutUserInput[]
    createMany?: Event_registrationsCreateManyUserInputEnvelope
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EventsCreateWithoutCreatorInput, EventsUncheckedCreateWithoutCreatorInput> | EventsCreateWithoutCreatorInput[] | EventsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCreatorInput | EventsCreateOrConnectWithoutCreatorInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutCreatorInput | EventsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EventsCreateManyCreatorInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutCreatorInput | EventsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutCreatorInput | EventsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type EventsUpdateManyWithoutApproverNestedInput = {
    create?: XOR<EventsCreateWithoutApproverInput, EventsUncheckedCreateWithoutApproverInput> | EventsCreateWithoutApproverInput[] | EventsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutApproverInput | EventsCreateOrConnectWithoutApproverInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutApproverInput | EventsUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: EventsCreateManyApproverInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutApproverInput | EventsUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutApproverInput | EventsUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type Event_registrationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Event_registrationsCreateWithoutUserInput, Event_registrationsUncheckedCreateWithoutUserInput> | Event_registrationsCreateWithoutUserInput[] | Event_registrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutUserInput | Event_registrationsCreateOrConnectWithoutUserInput[]
    upsert?: Event_registrationsUpsertWithWhereUniqueWithoutUserInput | Event_registrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Event_registrationsCreateManyUserInputEnvelope
    set?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    disconnect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    delete?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    update?: Event_registrationsUpdateWithWhereUniqueWithoutUserInput | Event_registrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Event_registrationsUpdateManyWithWhereWithoutUserInput | Event_registrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Event_registrationsScalarWhereInput | Event_registrationsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PostsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EventsCreateWithoutCreatorInput, EventsUncheckedCreateWithoutCreatorInput> | EventsCreateWithoutCreatorInput[] | EventsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutCreatorInput | EventsCreateOrConnectWithoutCreatorInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutCreatorInput | EventsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EventsCreateManyCreatorInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutCreatorInput | EventsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutCreatorInput | EventsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type EventsUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<EventsCreateWithoutApproverInput, EventsUncheckedCreateWithoutApproverInput> | EventsCreateWithoutApproverInput[] | EventsUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutApproverInput | EventsCreateOrConnectWithoutApproverInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutApproverInput | EventsUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: EventsCreateManyApproverInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutApproverInput | EventsUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutApproverInput | EventsUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type Event_registrationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Event_registrationsCreateWithoutUserInput, Event_registrationsUncheckedCreateWithoutUserInput> | Event_registrationsCreateWithoutUserInput[] | Event_registrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutUserInput | Event_registrationsCreateOrConnectWithoutUserInput[]
    upsert?: Event_registrationsUpsertWithWhereUniqueWithoutUserInput | Event_registrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Event_registrationsCreateManyUserInputEnvelope
    set?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    disconnect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    delete?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    update?: Event_registrationsUpdateWithWhereUniqueWithoutUserInput | Event_registrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Event_registrationsUpdateManyWithWhereWithoutUserInput | Event_registrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Event_registrationsScalarWhereInput | Event_registrationsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutEvents_createdInput = {
    create?: XOR<UsersCreateWithoutEvents_createdInput, UsersUncheckedCreateWithoutEvents_createdInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEvents_createdInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutEvents_approvedInput = {
    create?: XOR<UsersCreateWithoutEvents_approvedInput, UsersUncheckedCreateWithoutEvents_approvedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEvents_approvedInput
    connect?: UsersWhereUniqueInput
  }

  export type Event_registrationsCreateNestedManyWithoutEventInput = {
    create?: XOR<Event_registrationsCreateWithoutEventInput, Event_registrationsUncheckedCreateWithoutEventInput> | Event_registrationsCreateWithoutEventInput[] | Event_registrationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutEventInput | Event_registrationsCreateOrConnectWithoutEventInput[]
    createMany?: Event_registrationsCreateManyEventInputEnvelope
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutEventInput = {
    create?: XOR<NotificationsCreateWithoutEventInput, NotificationsUncheckedCreateWithoutEventInput> | NotificationsCreateWithoutEventInput[] | NotificationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutEventInput | NotificationsCreateOrConnectWithoutEventInput[]
    createMany?: NotificationsCreateManyEventInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PostsCreateNestedManyWithoutEventInput = {
    create?: XOR<PostsCreateWithoutEventInput, PostsUncheckedCreateWithoutEventInput> | PostsCreateWithoutEventInput[] | PostsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutEventInput | PostsCreateOrConnectWithoutEventInput[]
    createMany?: PostsCreateManyEventInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type Event_registrationsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<Event_registrationsCreateWithoutEventInput, Event_registrationsUncheckedCreateWithoutEventInput> | Event_registrationsCreateWithoutEventInput[] | Event_registrationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutEventInput | Event_registrationsCreateOrConnectWithoutEventInput[]
    createMany?: Event_registrationsCreateManyEventInputEnvelope
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<NotificationsCreateWithoutEventInput, NotificationsUncheckedCreateWithoutEventInput> | NotificationsCreateWithoutEventInput[] | NotificationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutEventInput | NotificationsCreateOrConnectWithoutEventInput[]
    createMany?: NotificationsCreateManyEventInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PostsCreateWithoutEventInput, PostsUncheckedCreateWithoutEventInput> | PostsCreateWithoutEventInput[] | PostsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutEventInput | PostsCreateOrConnectWithoutEventInput[]
    createMany?: PostsCreateManyEventInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type UsersUpdateOneWithoutEvents_createdNestedInput = {
    create?: XOR<UsersCreateWithoutEvents_createdInput, UsersUncheckedCreateWithoutEvents_createdInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEvents_createdInput
    upsert?: UsersUpsertWithoutEvents_createdInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEvents_createdInput, UsersUpdateWithoutEvents_createdInput>, UsersUncheckedUpdateWithoutEvents_createdInput>
  }

  export type UsersUpdateOneWithoutEvents_approvedNestedInput = {
    create?: XOR<UsersCreateWithoutEvents_approvedInput, UsersUncheckedCreateWithoutEvents_approvedInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEvents_approvedInput
    upsert?: UsersUpsertWithoutEvents_approvedInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEvents_approvedInput, UsersUpdateWithoutEvents_approvedInput>, UsersUncheckedUpdateWithoutEvents_approvedInput>
  }

  export type Event_registrationsUpdateManyWithoutEventNestedInput = {
    create?: XOR<Event_registrationsCreateWithoutEventInput, Event_registrationsUncheckedCreateWithoutEventInput> | Event_registrationsCreateWithoutEventInput[] | Event_registrationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutEventInput | Event_registrationsCreateOrConnectWithoutEventInput[]
    upsert?: Event_registrationsUpsertWithWhereUniqueWithoutEventInput | Event_registrationsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: Event_registrationsCreateManyEventInputEnvelope
    set?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    disconnect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    delete?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    update?: Event_registrationsUpdateWithWhereUniqueWithoutEventInput | Event_registrationsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: Event_registrationsUpdateManyWithWhereWithoutEventInput | Event_registrationsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: Event_registrationsScalarWhereInput | Event_registrationsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutEventNestedInput = {
    create?: XOR<NotificationsCreateWithoutEventInput, NotificationsUncheckedCreateWithoutEventInput> | NotificationsCreateWithoutEventInput[] | NotificationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutEventInput | NotificationsCreateOrConnectWithoutEventInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutEventInput | NotificationsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: NotificationsCreateManyEventInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutEventInput | NotificationsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutEventInput | NotificationsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PostsUpdateManyWithoutEventNestedInput = {
    create?: XOR<PostsCreateWithoutEventInput, PostsUncheckedCreateWithoutEventInput> | PostsCreateWithoutEventInput[] | PostsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutEventInput | PostsCreateOrConnectWithoutEventInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutEventInput | PostsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PostsCreateManyEventInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutEventInput | PostsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutEventInput | PostsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type Event_registrationsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<Event_registrationsCreateWithoutEventInput, Event_registrationsUncheckedCreateWithoutEventInput> | Event_registrationsCreateWithoutEventInput[] | Event_registrationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: Event_registrationsCreateOrConnectWithoutEventInput | Event_registrationsCreateOrConnectWithoutEventInput[]
    upsert?: Event_registrationsUpsertWithWhereUniqueWithoutEventInput | Event_registrationsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: Event_registrationsCreateManyEventInputEnvelope
    set?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    disconnect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    delete?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    connect?: Event_registrationsWhereUniqueInput | Event_registrationsWhereUniqueInput[]
    update?: Event_registrationsUpdateWithWhereUniqueWithoutEventInput | Event_registrationsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: Event_registrationsUpdateManyWithWhereWithoutEventInput | Event_registrationsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: Event_registrationsScalarWhereInput | Event_registrationsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<NotificationsCreateWithoutEventInput, NotificationsUncheckedCreateWithoutEventInput> | NotificationsCreateWithoutEventInput[] | NotificationsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutEventInput | NotificationsCreateOrConnectWithoutEventInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutEventInput | NotificationsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: NotificationsCreateManyEventInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutEventInput | NotificationsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutEventInput | NotificationsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PostsCreateWithoutEventInput, PostsUncheckedCreateWithoutEventInput> | PostsCreateWithoutEventInput[] | PostsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutEventInput | PostsCreateOrConnectWithoutEventInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutEventInput | PostsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PostsCreateManyEventInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutEventInput | PostsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutEventInput | PostsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UsersCreateWithoutRegistrationsInput, UsersUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRegistrationsInput
    connect?: UsersWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<EventsCreateWithoutRegistrationsInput, EventsUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutRegistrationsInput
    connect?: EventsWhereUniqueInput
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UsersCreateWithoutRegistrationsInput, UsersUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRegistrationsInput
    upsert?: UsersUpsertWithoutRegistrationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRegistrationsInput, UsersUpdateWithoutRegistrationsInput>, UsersUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventsUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<EventsCreateWithoutRegistrationsInput, EventsUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutRegistrationsInput
    upsert?: EventsUpsertWithoutRegistrationsInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutRegistrationsInput, EventsUpdateWithoutRegistrationsInput>, EventsUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UsersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<EventsCreateWithoutNotificationsInput, EventsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutNotificationsInput
    connect?: EventsWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UsersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    upsert?: UsersUpsertWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotificationsInput, UsersUpdateWithoutNotificationsInput>, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type EventsUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<EventsCreateWithoutNotificationsInput, EventsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutNotificationsInput
    upsert?: EventsUpsertWithoutNotificationsInput
    disconnect?: EventsWhereInput | boolean
    delete?: EventsWhereInput | boolean
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutNotificationsInput, EventsUpdateWithoutNotificationsInput>, EventsUncheckedUpdateWithoutNotificationsInput>
  }

  export type EventsCreateNestedOneWithoutPostsInput = {
    create?: XOR<EventsCreateWithoutPostsInput, EventsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutPostsInput
    connect?: EventsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type Post_mediaCreateNestedManyWithoutPostInput = {
    create?: XOR<Post_mediaCreateWithoutPostInput, Post_mediaUncheckedCreateWithoutPostInput> | Post_mediaCreateWithoutPostInput[] | Post_mediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: Post_mediaCreateOrConnectWithoutPostInput | Post_mediaCreateOrConnectWithoutPostInput[]
    createMany?: Post_mediaCreateManyPostInputEnvelope
    connect?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type Post_mediaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Post_mediaCreateWithoutPostInput, Post_mediaUncheckedCreateWithoutPostInput> | Post_mediaCreateWithoutPostInput[] | Post_mediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: Post_mediaCreateOrConnectWithoutPostInput | Post_mediaCreateOrConnectWithoutPostInput[]
    createMany?: Post_mediaCreateManyPostInputEnvelope
    connect?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
  }

  export type EventsUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<EventsCreateWithoutPostsInput, EventsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutPostsInput
    upsert?: EventsUpsertWithoutPostsInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutPostsInput, EventsUpdateWithoutPostsInput>, EventsUncheckedUpdateWithoutPostsInput>
  }

  export type UsersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostsInput
    upsert?: UsersUpsertWithoutPostsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPostsInput, UsersUpdateWithoutPostsInput>, UsersUncheckedUpdateWithoutPostsInput>
  }

  export type CommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type Post_mediaUpdateManyWithoutPostNestedInput = {
    create?: XOR<Post_mediaCreateWithoutPostInput, Post_mediaUncheckedCreateWithoutPostInput> | Post_mediaCreateWithoutPostInput[] | Post_mediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: Post_mediaCreateOrConnectWithoutPostInput | Post_mediaCreateOrConnectWithoutPostInput[]
    upsert?: Post_mediaUpsertWithWhereUniqueWithoutPostInput | Post_mediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: Post_mediaCreateManyPostInputEnvelope
    set?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    disconnect?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    delete?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    connect?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    update?: Post_mediaUpdateWithWhereUniqueWithoutPostInput | Post_mediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: Post_mediaUpdateManyWithWhereWithoutPostInput | Post_mediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: Post_mediaScalarWhereInput | Post_mediaScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type Post_mediaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Post_mediaCreateWithoutPostInput, Post_mediaUncheckedCreateWithoutPostInput> | Post_mediaCreateWithoutPostInput[] | Post_mediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: Post_mediaCreateOrConnectWithoutPostInput | Post_mediaCreateOrConnectWithoutPostInput[]
    upsert?: Post_mediaUpsertWithWhereUniqueWithoutPostInput | Post_mediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: Post_mediaCreateManyPostInputEnvelope
    set?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    disconnect?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    delete?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    connect?: Post_mediaWhereUniqueInput | Post_mediaWhereUniqueInput[]
    update?: Post_mediaUpdateWithWhereUniqueWithoutPostInput | Post_mediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: Post_mediaUpdateManyWithWhereWithoutPostInput | Post_mediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: Post_mediaScalarWhereInput | Post_mediaScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    upsert?: PostsUpsertWithoutCommentsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCommentsInput, PostsUpdateWithoutCommentsInput>, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type PostsCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikesInput
    connect?: PostsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutLikesInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikesInput
    upsert?: PostsUpsertWithoutLikesInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutLikesInput, PostsUpdateWithoutLikesInput>, PostsUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikesInput
    upsert?: UsersUpsertWithoutLikesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLikesInput, UsersUpdateWithoutLikesInput>, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type PostsCreateNestedOneWithoutMediaInput = {
    create?: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostsCreateOrConnectWithoutMediaInput
    connect?: PostsWhereUniqueInput
  }

  export type EnumPostMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostMediaType
  }

  export type PostsUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostsCreateOrConnectWithoutMediaInput
    upsert?: PostsUpsertWithoutMediaInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutMediaInput, PostsUpdateWithoutMediaInput>, PostsUncheckedUpdateWithoutMediaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumPostMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostMediaType | EnumPostMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostMediaTypeFilter<$PrismaModel> | $Enums.PostMediaType
  }

  export type NestedEnumPostMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostMediaType | EnumPostMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostMediaType[] | ListEnumPostMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumPostMediaTypeFilter<$PrismaModel>
  }

  export type EventsCreateWithoutCreatorInput = {
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    approver?: UsersCreateNestedOneWithoutEvents_approvedInput
    registrations?: Event_registrationsCreateNestedManyWithoutEventInput
    notifications?: NotificationsCreateNestedManyWithoutEventInput
    posts?: PostsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutCreatorInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    approved_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutEventInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutEventInput
    posts?: PostsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutCreatorInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutCreatorInput, EventsUncheckedCreateWithoutCreatorInput>
  }

  export type EventsCreateManyCreatorInputEnvelope = {
    data: EventsCreateManyCreatorInput | EventsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EventsCreateWithoutApproverInput = {
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    creator?: UsersCreateNestedOneWithoutEvents_createdInput
    registrations?: Event_registrationsCreateNestedManyWithoutEventInput
    notifications?: NotificationsCreateNestedManyWithoutEventInput
    posts?: PostsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutApproverInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    created_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutEventInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutEventInput
    posts?: PostsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutApproverInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutApproverInput, EventsUncheckedCreateWithoutApproverInput>
  }

  export type EventsCreateManyApproverInputEnvelope = {
    data: EventsCreateManyApproverInput | EventsCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type Event_registrationsCreateWithoutUserInput = {
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
    event: EventsCreateNestedOneWithoutRegistrationsInput
  }

  export type Event_registrationsUncheckedCreateWithoutUserInput = {
    id?: number
    event_id: number
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
  }

  export type Event_registrationsCreateOrConnectWithoutUserInput = {
    where: Event_registrationsWhereUniqueInput
    create: XOR<Event_registrationsCreateWithoutUserInput, Event_registrationsUncheckedCreateWithoutUserInput>
  }

  export type Event_registrationsCreateManyUserInputEnvelope = {
    data: Event_registrationsCreateManyUserInput | Event_registrationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUserInput = {
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
    event?: EventsCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: number
    event_id?: number | null
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostsCreateWithoutAuthorInput = {
    content: string
    created_at?: Date | string
    event: EventsCreateNestedOneWithoutPostsInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    media?: Post_mediaCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutAuthorInput = {
    id?: number
    event_id: number
    content: string
    created_at?: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    media?: Post_mediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsCreateManyAuthorInputEnvelope = {
    data: PostsCreateManyAuthorInput | PostsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    content: string
    created_at?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: number
    post_id: number
    content: string
    created_at?: Date | string
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutUserInput = {
    created_at?: Date | string
    post: PostsCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: number
    post_id: number
    created_at?: Date | string
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutCreatorInput, EventsUncheckedUpdateWithoutCreatorInput>
    create: XOR<EventsCreateWithoutCreatorInput, EventsUncheckedCreateWithoutCreatorInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutCreatorInput, EventsUncheckedUpdateWithoutCreatorInput>
  }

  export type EventsUpdateManyWithWhereWithoutCreatorInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EventsScalarWhereInput = {
    AND?: EventsScalarWhereInput | EventsScalarWhereInput[]
    OR?: EventsScalarWhereInput[]
    NOT?: EventsScalarWhereInput | EventsScalarWhereInput[]
    id?: IntFilter<"Events"> | number
    title?: StringFilter<"Events"> | string
    description?: StringNullableFilter<"Events"> | string | null
    category?: StringNullableFilter<"Events"> | string | null
    location?: StringFilter<"Events"> | string
    start_date?: DateTimeFilter<"Events"> | Date | string
    end_date?: DateTimeFilter<"Events"> | Date | string
    max_participants?: IntNullableFilter<"Events"> | number | null
    created_by?: IntNullableFilter<"Events"> | number | null
    approved_by?: IntNullableFilter<"Events"> | number | null
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    created_at?: DateTimeFilter<"Events"> | Date | string
  }

  export type EventsUpsertWithWhereUniqueWithoutApproverInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutApproverInput, EventsUncheckedUpdateWithoutApproverInput>
    create: XOR<EventsCreateWithoutApproverInput, EventsUncheckedCreateWithoutApproverInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutApproverInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutApproverInput, EventsUncheckedUpdateWithoutApproverInput>
  }

  export type EventsUpdateManyWithWhereWithoutApproverInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutApproverInput>
  }

  export type Event_registrationsUpsertWithWhereUniqueWithoutUserInput = {
    where: Event_registrationsWhereUniqueInput
    update: XOR<Event_registrationsUpdateWithoutUserInput, Event_registrationsUncheckedUpdateWithoutUserInput>
    create: XOR<Event_registrationsCreateWithoutUserInput, Event_registrationsUncheckedCreateWithoutUserInput>
  }

  export type Event_registrationsUpdateWithWhereUniqueWithoutUserInput = {
    where: Event_registrationsWhereUniqueInput
    data: XOR<Event_registrationsUpdateWithoutUserInput, Event_registrationsUncheckedUpdateWithoutUserInput>
  }

  export type Event_registrationsUpdateManyWithWhereWithoutUserInput = {
    where: Event_registrationsScalarWhereInput
    data: XOR<Event_registrationsUpdateManyMutationInput, Event_registrationsUncheckedUpdateManyWithoutUserInput>
  }

  export type Event_registrationsScalarWhereInput = {
    AND?: Event_registrationsScalarWhereInput | Event_registrationsScalarWhereInput[]
    OR?: Event_registrationsScalarWhereInput[]
    NOT?: Event_registrationsScalarWhereInput | Event_registrationsScalarWhereInput[]
    id?: IntFilter<"Event_registrations"> | number
    user_id?: IntFilter<"Event_registrations"> | number
    event_id?: IntFilter<"Event_registrations"> | number
    status?: EnumRegistrationStatusFilter<"Event_registrations"> | $Enums.RegistrationStatus
    completed?: BoolFilter<"Event_registrations"> | boolean
    registered_at?: DateTimeFilter<"Event_registrations"> | Date | string
    canceled_at?: DateTimeNullableFilter<"Event_registrations"> | Date | string | null
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: IntFilter<"Notifications"> | number
    user_id?: IntFilter<"Notifications"> | number
    event_id?: IntNullableFilter<"Notifications"> | number | null
    message?: StringFilter<"Notifications"> | string
    type?: EnumNotificationTypeFilter<"Notifications"> | $Enums.NotificationType
    is_read?: BoolFilter<"Notifications"> | boolean
    created_at?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type PostsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
  }

  export type PostsUpdateManyWithWhereWithoutAuthorInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: IntFilter<"Posts"> | number
    event_id?: IntFilter<"Posts"> | number
    user_id?: IntFilter<"Posts"> | number
    content?: StringFilter<"Posts"> | string
    created_at?: DateTimeFilter<"Posts"> | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    post_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    created_at?: DateTimeFilter<"Comments"> | Date | string
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: IntFilter<"Likes"> | number
    post_id?: IntFilter<"Likes"> | number
    user_id?: IntFilter<"Likes"> | number
    created_at?: DateTimeFilter<"Likes"> | Date | string
  }

  export type UsersCreateWithoutEvents_createdInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_approved?: EventsCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    posts?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutEvents_createdInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_approved?: EventsUncheckedCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutEvents_createdInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEvents_createdInput, UsersUncheckedCreateWithoutEvents_createdInput>
  }

  export type UsersCreateWithoutEvents_approvedInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsCreateNestedManyWithoutCreatorInput
    registrations?: Event_registrationsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    posts?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutEvents_approvedInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsUncheckedCreateNestedManyWithoutCreatorInput
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutEvents_approvedInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEvents_approvedInput, UsersUncheckedCreateWithoutEvents_approvedInput>
  }

  export type Event_registrationsCreateWithoutEventInput = {
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
    user: UsersCreateNestedOneWithoutRegistrationsInput
  }

  export type Event_registrationsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
  }

  export type Event_registrationsCreateOrConnectWithoutEventInput = {
    where: Event_registrationsWhereUniqueInput
    create: XOR<Event_registrationsCreateWithoutEventInput, Event_registrationsUncheckedCreateWithoutEventInput>
  }

  export type Event_registrationsCreateManyEventInputEnvelope = {
    data: Event_registrationsCreateManyEventInput | Event_registrationsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutEventInput = {
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutEventInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutEventInput, NotificationsUncheckedCreateWithoutEventInput>
  }

  export type NotificationsCreateManyEventInputEnvelope = {
    data: NotificationsCreateManyEventInput | NotificationsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PostsCreateWithoutEventInput = {
    content: string
    created_at?: Date | string
    author: UsersCreateNestedOneWithoutPostsInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
    media?: Post_mediaCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    media?: Post_mediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutEventInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutEventInput, PostsUncheckedCreateWithoutEventInput>
  }

  export type PostsCreateManyEventInputEnvelope = {
    data: PostsCreateManyEventInput | PostsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutEvents_createdInput = {
    update: XOR<UsersUpdateWithoutEvents_createdInput, UsersUncheckedUpdateWithoutEvents_createdInput>
    create: XOR<UsersCreateWithoutEvents_createdInput, UsersUncheckedCreateWithoutEvents_createdInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEvents_createdInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEvents_createdInput, UsersUncheckedUpdateWithoutEvents_createdInput>
  }

  export type UsersUpdateWithoutEvents_createdInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_approved?: EventsUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    posts?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutEvents_createdInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_approved?: EventsUncheckedUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUpsertWithoutEvents_approvedInput = {
    update: XOR<UsersUpdateWithoutEvents_approvedInput, UsersUncheckedUpdateWithoutEvents_approvedInput>
    create: XOR<UsersCreateWithoutEvents_approvedInput, UsersUncheckedCreateWithoutEvents_approvedInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEvents_approvedInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEvents_approvedInput, UsersUncheckedUpdateWithoutEvents_approvedInput>
  }

  export type UsersUpdateWithoutEvents_approvedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUpdateManyWithoutCreatorNestedInput
    registrations?: Event_registrationsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    posts?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutEvents_approvedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUncheckedUpdateManyWithoutCreatorNestedInput
    registrations?: Event_registrationsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Event_registrationsUpsertWithWhereUniqueWithoutEventInput = {
    where: Event_registrationsWhereUniqueInput
    update: XOR<Event_registrationsUpdateWithoutEventInput, Event_registrationsUncheckedUpdateWithoutEventInput>
    create: XOR<Event_registrationsCreateWithoutEventInput, Event_registrationsUncheckedCreateWithoutEventInput>
  }

  export type Event_registrationsUpdateWithWhereUniqueWithoutEventInput = {
    where: Event_registrationsWhereUniqueInput
    data: XOR<Event_registrationsUpdateWithoutEventInput, Event_registrationsUncheckedUpdateWithoutEventInput>
  }

  export type Event_registrationsUpdateManyWithWhereWithoutEventInput = {
    where: Event_registrationsScalarWhereInput
    data: XOR<Event_registrationsUpdateManyMutationInput, Event_registrationsUncheckedUpdateManyWithoutEventInput>
  }

  export type NotificationsUpsertWithWhereUniqueWithoutEventInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutEventInput, NotificationsUncheckedUpdateWithoutEventInput>
    create: XOR<NotificationsCreateWithoutEventInput, NotificationsUncheckedCreateWithoutEventInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutEventInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutEventInput, NotificationsUncheckedUpdateWithoutEventInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutEventInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutEventInput>
  }

  export type PostsUpsertWithWhereUniqueWithoutEventInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutEventInput, PostsUncheckedUpdateWithoutEventInput>
    create: XOR<PostsCreateWithoutEventInput, PostsUncheckedCreateWithoutEventInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutEventInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutEventInput, PostsUncheckedUpdateWithoutEventInput>
  }

  export type PostsUpdateManyWithWhereWithoutEventInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutEventInput>
  }

  export type UsersCreateWithoutRegistrationsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsCreateNestedManyWithoutCreatorInput
    events_approved?: EventsCreateNestedManyWithoutApproverInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    posts?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsUncheckedCreateNestedManyWithoutCreatorInput
    events_approved?: EventsUncheckedCreateNestedManyWithoutApproverInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRegistrationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRegistrationsInput, UsersUncheckedCreateWithoutRegistrationsInput>
  }

  export type EventsCreateWithoutRegistrationsInput = {
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    creator?: UsersCreateNestedOneWithoutEvents_createdInput
    approver?: UsersCreateNestedOneWithoutEvents_approvedInput
    notifications?: NotificationsCreateNestedManyWithoutEventInput
    posts?: PostsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    created_by?: number | null
    approved_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutEventInput
    posts?: PostsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutRegistrationsInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutRegistrationsInput, EventsUncheckedCreateWithoutRegistrationsInput>
  }

  export type UsersUpsertWithoutRegistrationsInput = {
    update: XOR<UsersUpdateWithoutRegistrationsInput, UsersUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UsersCreateWithoutRegistrationsInput, UsersUncheckedCreateWithoutRegistrationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRegistrationsInput, UsersUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UsersUpdateWithoutRegistrationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUpdateManyWithoutApproverNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    posts?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUncheckedUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUncheckedUpdateManyWithoutApproverNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventsUpsertWithoutRegistrationsInput = {
    update: XOR<EventsUpdateWithoutRegistrationsInput, EventsUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<EventsCreateWithoutRegistrationsInput, EventsUncheckedCreateWithoutRegistrationsInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutRegistrationsInput, EventsUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventsUpdateWithoutRegistrationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneWithoutEvents_createdNestedInput
    approver?: UsersUpdateOneWithoutEvents_approvedNestedInput
    notifications?: NotificationsUpdateManyWithoutEventNestedInput
    posts?: PostsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUncheckedUpdateManyWithoutEventNestedInput
    posts?: PostsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UsersCreateWithoutNotificationsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsCreateNestedManyWithoutCreatorInput
    events_approved?: EventsCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsCreateNestedManyWithoutUserInput
    posts?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsUncheckedCreateNestedManyWithoutCreatorInput
    events_approved?: EventsUncheckedCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutUserInput
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
  }

  export type EventsCreateWithoutNotificationsInput = {
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    creator?: UsersCreateNestedOneWithoutEvents_createdInput
    approver?: UsersCreateNestedOneWithoutEvents_approvedInput
    registrations?: Event_registrationsCreateNestedManyWithoutEventInput
    posts?: PostsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutNotificationsInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    created_by?: number | null
    approved_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutEventInput
    posts?: PostsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutNotificationsInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutNotificationsInput, EventsUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersUpsertWithoutNotificationsInput = {
    update: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUpdateManyWithoutUserNestedInput
    posts?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUncheckedUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUncheckedUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventsUpsertWithoutNotificationsInput = {
    update: XOR<EventsUpdateWithoutNotificationsInput, EventsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<EventsCreateWithoutNotificationsInput, EventsUncheckedCreateWithoutNotificationsInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutNotificationsInput, EventsUncheckedUpdateWithoutNotificationsInput>
  }

  export type EventsUpdateWithoutNotificationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneWithoutEvents_createdNestedInput
    approver?: UsersUpdateOneWithoutEvents_approvedNestedInput
    registrations?: Event_registrationsUpdateManyWithoutEventNestedInput
    posts?: PostsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: Event_registrationsUncheckedUpdateManyWithoutEventNestedInput
    posts?: PostsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsCreateWithoutPostsInput = {
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    creator?: UsersCreateNestedOneWithoutEvents_createdInput
    approver?: UsersCreateNestedOneWithoutEvents_approvedInput
    registrations?: Event_registrationsCreateNestedManyWithoutEventInput
    notifications?: NotificationsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutPostsInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    created_by?: number | null
    approved_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutEventInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutPostsInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutPostsInput, EventsUncheckedCreateWithoutPostsInput>
  }

  export type UsersCreateWithoutPostsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsCreateNestedManyWithoutCreatorInput
    events_approved?: EventsCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    comments?: CommentsCreateNestedManyWithoutUserInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsUncheckedCreateNestedManyWithoutCreatorInput
    events_approved?: EventsUncheckedCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPostsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
  }

  export type CommentsCreateWithoutPostInput = {
    content: string
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutPostInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string
  }

  export type CommentsCreateOrConnectWithoutPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsCreateManyPostInputEnvelope = {
    data: CommentsCreateManyPostInput | CommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutPostInput = {
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutPostInput = {
    id?: number
    user_id: number
    created_at?: Date | string
  }

  export type LikesCreateOrConnectWithoutPostInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesCreateManyPostInputEnvelope = {
    data: LikesCreateManyPostInput | LikesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type Post_mediaCreateWithoutPostInput = {
    file_url?: string | null
    file_type?: $Enums.PostMediaType
    created_at?: Date | string
  }

  export type Post_mediaUncheckedCreateWithoutPostInput = {
    id?: number
    file_url?: string | null
    file_type?: $Enums.PostMediaType
    created_at?: Date | string
  }

  export type Post_mediaCreateOrConnectWithoutPostInput = {
    where: Post_mediaWhereUniqueInput
    create: XOR<Post_mediaCreateWithoutPostInput, Post_mediaUncheckedCreateWithoutPostInput>
  }

  export type Post_mediaCreateManyPostInputEnvelope = {
    data: Post_mediaCreateManyPostInput | Post_mediaCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithoutPostsInput = {
    update: XOR<EventsUpdateWithoutPostsInput, EventsUncheckedUpdateWithoutPostsInput>
    create: XOR<EventsCreateWithoutPostsInput, EventsUncheckedCreateWithoutPostsInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutPostsInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutPostsInput, EventsUncheckedUpdateWithoutPostsInput>
  }

  export type EventsUpdateWithoutPostsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneWithoutEvents_createdNestedInput
    approver?: UsersUpdateOneWithoutEvents_approvedNestedInput
    registrations?: Event_registrationsUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: Event_registrationsUncheckedUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UsersUpsertWithoutPostsInput = {
    update: XOR<UsersUpdateWithoutPostsInput, UsersUncheckedUpdateWithoutPostsInput>
    create: XOR<UsersCreateWithoutPostsInput, UsersUncheckedCreateWithoutPostsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPostsInput, UsersUncheckedUpdateWithoutPostsInput>
  }

  export type UsersUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUncheckedUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUncheckedUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type LikesUpsertWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
  }

  export type LikesUpdateManyWithWhereWithoutPostInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutPostInput>
  }

  export type Post_mediaUpsertWithWhereUniqueWithoutPostInput = {
    where: Post_mediaWhereUniqueInput
    update: XOR<Post_mediaUpdateWithoutPostInput, Post_mediaUncheckedUpdateWithoutPostInput>
    create: XOR<Post_mediaCreateWithoutPostInput, Post_mediaUncheckedCreateWithoutPostInput>
  }

  export type Post_mediaUpdateWithWhereUniqueWithoutPostInput = {
    where: Post_mediaWhereUniqueInput
    data: XOR<Post_mediaUpdateWithoutPostInput, Post_mediaUncheckedUpdateWithoutPostInput>
  }

  export type Post_mediaUpdateManyWithWhereWithoutPostInput = {
    where: Post_mediaScalarWhereInput
    data: XOR<Post_mediaUpdateManyMutationInput, Post_mediaUncheckedUpdateManyWithoutPostInput>
  }

  export type Post_mediaScalarWhereInput = {
    AND?: Post_mediaScalarWhereInput | Post_mediaScalarWhereInput[]
    OR?: Post_mediaScalarWhereInput[]
    NOT?: Post_mediaScalarWhereInput | Post_mediaScalarWhereInput[]
    id?: IntFilter<"Post_media"> | number
    post_id?: IntFilter<"Post_media"> | number
    file_url?: StringNullableFilter<"Post_media"> | string | null
    file_type?: EnumPostMediaTypeFilter<"Post_media"> | $Enums.PostMediaType
    created_at?: DateTimeFilter<"Post_media"> | Date | string
  }

  export type PostsCreateWithoutCommentsInput = {
    content: string
    created_at?: Date | string
    event: EventsCreateNestedOneWithoutPostsInput
    author: UsersCreateNestedOneWithoutPostsInput
    likes?: LikesCreateNestedManyWithoutPostInput
    media?: Post_mediaCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutCommentsInput = {
    id?: number
    event_id: number
    user_id: number
    content: string
    created_at?: Date | string
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
    media?: Post_mediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutCommentsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
  }

  export type UsersCreateWithoutCommentsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsCreateNestedManyWithoutCreatorInput
    events_approved?: EventsCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    posts?: PostsCreateNestedManyWithoutAuthorInput
    likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsUncheckedCreateNestedManyWithoutCreatorInput
    events_approved?: EventsUncheckedCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type PostsUpsertWithoutCommentsInput = {
    update: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type PostsUpdateWithoutCommentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutPostsNestedInput
    author?: UsersUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    media?: Post_mediaUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    media?: Post_mediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    posts?: PostsUpdateManyWithoutAuthorNestedInput
    likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUncheckedUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUncheckedUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsCreateWithoutLikesInput = {
    content: string
    created_at?: Date | string
    event: EventsCreateNestedOneWithoutPostsInput
    author: UsersCreateNestedOneWithoutPostsInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    media?: Post_mediaCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutLikesInput = {
    id?: number
    event_id: number
    user_id: number
    content: string
    created_at?: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    media?: Post_mediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutLikesInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
  }

  export type UsersCreateWithoutLikesInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsCreateNestedManyWithoutCreatorInput
    events_approved?: EventsCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
    posts?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLikesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    created_at?: Date | string
    events_created?: EventsUncheckedCreateNestedManyWithoutCreatorInput
    events_approved?: EventsUncheckedCreateNestedManyWithoutApproverInput
    registrations?: Event_registrationsUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    posts?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLikesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
  }

  export type PostsUpsertWithoutLikesInput = {
    update: XOR<PostsUpdateWithoutLikesInput, PostsUncheckedUpdateWithoutLikesInput>
    create: XOR<PostsCreateWithoutLikesInput, PostsUncheckedCreateWithoutLikesInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutLikesInput, PostsUncheckedUpdateWithoutLikesInput>
  }

  export type PostsUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutPostsNestedInput
    author?: UsersUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    media?: Post_mediaUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    media?: Post_mediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsersUpsertWithoutLikesInput = {
    update: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
    create: XOR<UsersCreateWithoutLikesInput, UsersUncheckedCreateWithoutLikesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLikesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLikesInput, UsersUncheckedUpdateWithoutLikesInput>
  }

  export type UsersUpdateWithoutLikesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
    posts?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events_created?: EventsUncheckedUpdateManyWithoutCreatorNestedInput
    events_approved?: EventsUncheckedUpdateManyWithoutApproverNestedInput
    registrations?: Event_registrationsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsCreateWithoutMediaInput = {
    content: string
    created_at?: Date | string
    event: EventsCreateNestedOneWithoutPostsInput
    author: UsersCreateNestedOneWithoutPostsInput
    comments?: CommentsCreateNestedManyWithoutPostInput
    likes?: LikesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutMediaInput = {
    id?: number
    event_id: number
    user_id: number
    content: string
    created_at?: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likes?: LikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutMediaInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
  }

  export type PostsUpsertWithoutMediaInput = {
    update: XOR<PostsUpdateWithoutMediaInput, PostsUncheckedUpdateWithoutMediaInput>
    create: XOR<PostsCreateWithoutMediaInput, PostsUncheckedCreateWithoutMediaInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutMediaInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutMediaInput, PostsUncheckedUpdateWithoutMediaInput>
  }

  export type PostsUpdateWithoutMediaInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutPostsNestedInput
    author?: UsersUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type EventsCreateManyCreatorInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    approved_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
  }

  export type EventsCreateManyApproverInput = {
    id?: number
    title: string
    description?: string | null
    category?: string | null
    location: string
    start_date: Date | string
    end_date: Date | string
    max_participants?: number | null
    created_by?: number | null
    status?: $Enums.EventStatus
    created_at?: Date | string
  }

  export type Event_registrationsCreateManyUserInput = {
    id?: number
    event_id: number
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
  }

  export type NotificationsCreateManyUserInput = {
    id?: number
    event_id?: number | null
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
  }

  export type PostsCreateManyAuthorInput = {
    id?: number
    event_id: number
    content: string
    created_at?: Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: number
    post_id: number
    content: string
    created_at?: Date | string
  }

  export type LikesCreateManyUserInput = {
    id?: number
    post_id: number
    created_at?: Date | string
  }

  export type EventsUpdateWithoutCreatorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: UsersUpdateOneWithoutEvents_approvedNestedInput
    registrations?: Event_registrationsUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUpdateManyWithoutEventNestedInput
    posts?: PostsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: Event_registrationsUncheckedUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutEventNestedInput
    posts?: PostsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUpdateWithoutApproverInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UsersUpdateOneWithoutEvents_createdNestedInput
    registrations?: Event_registrationsUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUpdateManyWithoutEventNestedInput
    posts?: PostsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: Event_registrationsUncheckedUpdateManyWithoutEventNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutEventNestedInput
    posts?: PostsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateManyWithoutApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    max_participants?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event_registrationsUpdateWithoutUserInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventsUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type Event_registrationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Event_registrationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationsUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    media?: Post_mediaUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    media?: Post_mediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Event_registrationsCreateManyEventInput = {
    id?: number
    user_id: number
    status?: $Enums.RegistrationStatus
    completed?: boolean
    registered_at?: Date | string
    canceled_at?: Date | string | null
  }

  export type NotificationsCreateManyEventInput = {
    id?: number
    user_id: number
    message: string
    type?: $Enums.NotificationType
    is_read?: boolean
    created_at?: Date | string
  }

  export type PostsCreateManyEventInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string
  }

  export type Event_registrationsUpdateWithoutEventInput = {
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type Event_registrationsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Event_registrationsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    completed?: BoolFieldUpdateOperationsInput | boolean
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    canceled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationsUpdateWithoutEventInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUpdateWithoutEventInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentsUpdateManyWithoutPostNestedInput
    likes?: LikesUpdateManyWithoutPostNestedInput
    media?: Post_mediaUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPostNestedInput
    media?: Post_mediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyPostInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string
  }

  export type LikesCreateManyPostInput = {
    id?: number
    user_id: number
    created_at?: Date | string
  }

  export type Post_mediaCreateManyPostInput = {
    id?: number
    file_url?: string | null
    file_type?: $Enums.PostMediaType
    created_at?: Date | string
  }

  export type CommentsUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutPostInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Post_mediaUpdateWithoutPostInput = {
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: EnumPostMediaTypeFieldUpdateOperationsInput | $Enums.PostMediaType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Post_mediaUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: EnumPostMediaTypeFieldUpdateOperationsInput | $Enums.PostMediaType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Post_mediaUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: EnumPostMediaTypeFieldUpdateOperationsInput | $Enums.PostMediaType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}