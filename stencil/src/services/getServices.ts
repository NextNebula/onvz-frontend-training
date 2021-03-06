import { PodcastDetails, PodcastResult } from '../types/podcast'

const url = `http://localhost:4000`

export async function getSearchResults(query): Promise<PodcastResult[]> {
    return await fetch(`${url}/search/${query}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
}

export async function getSubscriptions(): Promise<PodcastResult[]> {
  return await fetch(`${url}/subscriptions`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

export async function getPodcastDetails(id): Promise<PodcastDetails> {
  return await fetch(`${url}/podcast/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

export async function postSubscribe(id) {
  return await fetch(`${url}/subscribe/${id}`, {
    method: "post",
  });
}

export async function postUnsubscribe(id) {
  return await fetch(`${url}/unsubscribe/${id}`, {
    method: "post",
  });
}