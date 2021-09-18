/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateListeningProfileInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelListeningProfileConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelListeningProfileConditionInput | null> | null;
  or?: Array<ModelListeningProfileConditionInput | null> | null;
  not?: ModelListeningProfileConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ListeningProfile = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateListeningProfileInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteListeningProfileInput = {
  id: string;
};

export type ModelListeningProfileFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelListeningProfileFilterInput | null> | null;
  or?: Array<ModelListeningProfileFilterInput | null> | null;
  not?: ModelListeningProfileFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelListeningProfileConnection = {
  __typename: "ModelListeningProfileConnection";
  items?: Array<ListeningProfile | null> | null;
  nextToken?: string | null;
};

export type CreateListeningProfileMutation = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateListeningProfileMutation = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteListeningProfileMutation = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetListeningProfileQuery = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListListeningProfilesQuery = {
  __typename: "ModelListeningProfileConnection";
  items?: Array<{
    __typename: "ListeningProfile";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateListeningProfileSubscription = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateListeningProfileSubscription = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteListeningProfileSubscription = {
  __typename: "ListeningProfile";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateListeningProfile(
    input: CreateListeningProfileInput,
    condition?: ModelListeningProfileConditionInput
  ): Promise<CreateListeningProfileMutation> {
    const statement = `mutation CreateListeningProfile($input: CreateListeningProfileInput!, $condition: ModelListeningProfileConditionInput) {
        createListeningProfile(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateListeningProfileMutation>response.data.createListeningProfile;
  }
  async UpdateListeningProfile(
    input: UpdateListeningProfileInput,
    condition?: ModelListeningProfileConditionInput
  ): Promise<UpdateListeningProfileMutation> {
    const statement = `mutation UpdateListeningProfile($input: UpdateListeningProfileInput!, $condition: ModelListeningProfileConditionInput) {
        updateListeningProfile(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateListeningProfileMutation>response.data.updateListeningProfile;
  }
  async DeleteListeningProfile(
    input: DeleteListeningProfileInput,
    condition?: ModelListeningProfileConditionInput
  ): Promise<DeleteListeningProfileMutation> {
    const statement = `mutation DeleteListeningProfile($input: DeleteListeningProfileInput!, $condition: ModelListeningProfileConditionInput) {
        deleteListeningProfile(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteListeningProfileMutation>response.data.deleteListeningProfile;
  }
  async GetListeningProfile(id: string): Promise<GetListeningProfileQuery> {
    const statement = `query GetListeningProfile($id: ID!) {
        getListeningProfile(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetListeningProfileQuery>response.data.getListeningProfile;
  }
  async ListListeningProfiles(
    filter?: ModelListeningProfileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListListeningProfilesQuery> {
    const statement = `query ListListeningProfiles($filter: ModelListeningProfileFilterInput, $limit: Int, $nextToken: String) {
        listListeningProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListListeningProfilesQuery>response.data.listListeningProfiles;
  }
  OnCreateListeningProfileListener: Observable<
    SubscriptionResponse<OnCreateListeningProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateListeningProfile {
        onCreateListeningProfile {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateListeningProfileSubscription>>;

  OnUpdateListeningProfileListener: Observable<
    SubscriptionResponse<OnUpdateListeningProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateListeningProfile {
        onUpdateListeningProfile {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateListeningProfileSubscription>>;

  OnDeleteListeningProfileListener: Observable<
    SubscriptionResponse<OnDeleteListeningProfileSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteListeningProfile {
        onDeleteListeningProfile {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteListeningProfileSubscription>>;
}
