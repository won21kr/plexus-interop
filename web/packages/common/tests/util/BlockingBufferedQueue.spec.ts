/**
 * Copyright 2017 Plexus Interop Deutsche Bank AG
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { BlockingBufferedQueue } from "../../src/util/collections/BlockingBufferedQueue";

describe("BlockingBufferedQueue", () => {

    it("Should enqueue and dequeue element if buffer size is enough", (done) => {
        const sut = new BlockingBufferedQueue(1);
        const el = "test";
        sut.blockingDequeue().then(res => {
            expect(res).toBe(el);
            done();
        });
        setTimeout(() => sut.enqueue(el), 30);
    });

    it("Should reject enqueue if buffer size is not enough", (done) => {
        const sut = new BlockingBufferedQueue(0);
        const el = "test";
        sut.enqueue(el).catch(() => done());
    });

});